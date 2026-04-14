import type { Env } from './types';
import { handleAuth, verifyToken, json, corsHeaders } from './auth';
import { listPosts, getPost, createPost, updatePost, deletePost, togglePost } from './api/posts';
import { handleBlogSSR } from './blog-ssr';
import { readFileSync } from 'fs';

// Admin HTML — inlined at build time
const ADMIN_HTML = `ADMIN_HTML_PLACEHOLDER`;

const SITE_NAME = 'Atlas Corporate Services';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    // Handle CORS preflight
    if (method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() });
    }

    // ── Admin panel ────────────────────────────────────────────────────────────
    if (path === '/admin' || path === '/admin/') {
      return new Response(ADMIN_HTML, {
        headers: { 'Content-Type': 'text/html;charset=UTF-8' }
      });
    }

    // ── Auth API ───────────────────────────────────────────────────────────────
    if (path === '/api/auth') {
      return handleAuth(request, env);
    }

    // ── Posts API (all require auth) ───────────────────────────────────────────
    if (path.startsWith('/api/posts')) {
      const authed = await verifyToken(request, env);
      if (!authed) return json({ error: 'Unauthorised' }, 401);

      // GET /api/posts/recent?exclude=slug — for sidebar (no auth required, but fine here)
      if (path === '/api/posts/recent') {
        const exclude = url.searchParams.get('exclude') || '';
        const result = await env.DB.prepare(
          'SELECT slug,title,category FROM posts WHERE published=1 AND slug!=? ORDER BY created_at DESC LIMIT 3'
        ).bind(exclude).all();
        return json({ posts: result.results });
      }

      const slugMatch = path.match(/^\/api\/posts\/([^/]+)(\/toggle)?$/);
      const slug = slugMatch?.[1];
      const isToggle = !!slugMatch?.[2];

      if (path === '/api/posts') {
        if (method === 'GET') return listPosts(env);
        if (method === 'POST') return createPost(request, env);
      }

      if (slug) {
        if (isToggle && method === 'PUT') return togglePost(env, slug);
        if (method === 'GET') return getPost(env, slug);
        if (method === 'PUT') return updatePost(request, env, slug);
        if (method === 'DELETE') return deletePost(env, slug);
      }

      return json({ error: 'Not found' }, 404);
    }

    // ── Public: recent posts (for blog sidebar) ────────────────────────────────
    if (path === '/api/posts/recent') {
      const exclude = url.searchParams.get('exclude') || '';
      const result = await env.DB.prepare(
        'SELECT slug,title,category FROM posts WHERE published=1 AND slug!=? ORDER BY created_at DESC LIMIT 3'
      ).bind(exclude).all();
      return json({ posts: result.results });
    }

    // ── Blog SSR ───────────────────────────────────────────────────────────────
    if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '').replace(/\/$/, '');
      if (!slug) return new Response(null, { status: 404 });
      return handleBlogSSR(request, env, slug);
    }

    // ── Dynamic sitemap (includes D1 posts) ───────────────────────────────────
    if (path === '/sitemap-blog.xml') {
      const cached = await env.KV.get('sitemap', 'text');
      if (cached) return new Response(cached, { headers: { 'Content-Type': 'application/xml' } });

      const result = await env.DB.prepare(
        'SELECT slug,updated_at FROM posts WHERE published=1 ORDER BY created_at DESC'
      ).all() as { results: { slug: string; updated_at: string }[] };

      const urls = result.results.map(p => `
  <url>
    <loc>https://www.atlascorp.ae/blog/${p.slug}</loc>
    <lastmod>${(p.updated_at || new Date().toISOString()).split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('');

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

      await env.KV.put('sitemap', xml, { expirationTtl: 3600 });
      return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
    }

    return new Response('Not found', { status: 404 });
  }
};
