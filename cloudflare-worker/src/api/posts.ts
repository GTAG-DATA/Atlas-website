import type { Env, Post } from '../types';
import { json } from '../auth';

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function now(): string {
  return new Date().toISOString().replace('T', ' ').slice(0, 19);
}

// Invalidate KV cache for a slug
async function invalidateCache(env: Env, slug: string) {
  await env.KV.delete(`blog:${slug}`);
  await env.KV.delete('sitemap');
  await env.KV.delete('llms');
}

// GET /api/posts — list all posts (admin)
export async function listPosts(env: Env): Promise<Response> {
  const result = await env.DB.prepare(
    'SELECT id,slug,title,category,published,date,created_at FROM posts ORDER BY created_at DESC'
  ).all();
  return json({ posts: result.results });
}

// GET /api/posts/:slug — single post (admin)
export async function getPost(env: Env, slug: string): Promise<Response> {
  const post = await env.DB.prepare('SELECT * FROM posts WHERE slug = ?').bind(slug).first();
  if (!post) return json({ error: 'Not found' }, 404);
  return json({ post });
}

// POST /api/posts — create post
export async function createPost(request: Request, env: Env): Promise<Response> {
  const body = await request.json() as Partial<Post> & { published?: boolean };
  const slug = body.slug || slugify(body.title || '');
  if (!slug || !body.title || !body.excerpt || !body.content) {
    return json({ error: 'title, excerpt and content are required' }, 400);
  }

  // Check slug unique
  const existing = await env.DB.prepare('SELECT id FROM posts WHERE slug = ?').bind(slug).first();
  if (existing) return json({ error: 'Slug already exists' }, 409);

  const faqs = JSON.stringify(body.faqs || []);
  const published = body.published ? 1 : 0;
  const t = now();

  await env.DB.prepare(`
    INSERT INTO posts (slug,title,seo_title,meta_description,excerpt,content,image_url,category,date,read_time,faqs,show_contact_form,published,created_at,updated_at)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  `).bind(
    slug,
    body.title,
    body.seo_title || body.title,
    body.meta_description || body.excerpt,
    body.excerpt,
    body.content,
    body.image_url || '',
    body.category || 'General',
    body.date || new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
    body.read_time || '5 min read',
    faqs,
    body.show_contact_form !== undefined ? (body.show_contact_form ? 1 : 0) : 1,
    published,
    t, t
  ).run();

  await invalidateCache(env, slug);
  return json({ success: true, slug });
}

// PUT /api/posts/:slug — update post
export async function updatePost(request: Request, env: Env, slug: string): Promise<Response> {
  const post = await env.DB.prepare('SELECT id FROM posts WHERE slug = ?').bind(slug).first();
  if (!post) return json({ error: 'Not found' }, 404);

  const body = await request.json() as Partial<Post>;
  const faqs = JSON.stringify(body.faqs || []);
  const t = now();

  await env.DB.prepare(`
    UPDATE posts SET
      title=?, seo_title=?, meta_description=?, excerpt=?, content=?,
      image_url=?, category=?, date=?, read_time=?, faqs=?,
      show_contact_form=?, published=?, updated_at=?
    WHERE slug=?
  `).bind(
    body.title,
    body.seo_title || body.title,
    body.meta_description || body.excerpt,
    body.excerpt,
    body.content,
    body.image_url || '',
    body.category || 'General',
    body.date,
    body.read_time || '5 min read',
    faqs,
    body.show_contact_form !== undefined ? (body.show_contact_form ? 1 : 0) : 1,
    body.published !== undefined ? (body.published ? 1 : 0) : 0,
    t,
    slug
  ).run();

  await invalidateCache(env, slug);
  return json({ success: true });
}

// DELETE /api/posts/:slug
export async function deletePost(env: Env, slug: string): Promise<Response> {
  const post = await env.DB.prepare('SELECT id FROM posts WHERE slug = ?').bind(slug).first();
  if (!post) return json({ error: 'Not found' }, 404);
  await env.DB.prepare('DELETE FROM posts WHERE slug = ?').bind(slug).run();
  await invalidateCache(env, slug);
  return json({ success: true });
}

// PUT /api/posts/:slug/toggle — toggle published
export async function togglePost(env: Env, slug: string): Promise<Response> {
  const post = await env.DB.prepare('SELECT published FROM posts WHERE slug = ?').bind(slug).first() as Post | null;
  if (!post) return json({ error: 'Not found' }, 404);
  const newPublished = post.published ? 0 : 1;
  await env.DB.prepare('UPDATE posts SET published=?, updated_at=? WHERE slug=?')
    .bind(newPublished, now(), slug).run();
  await invalidateCache(env, slug);
  return json({ success: true, published: newPublished });
}
