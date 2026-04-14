/**
 * prerender-blog.ts
 *
 * Pre-renders each blog post's article content into dist-production HTML files.
 * Replaces the home-page pre-render inside <div id="root"> with the correct
 * article text so Google sees it on first crawl (no JS required).
 * Also injects BlogPosting JSON-LD structured data.
 *
 * Run: pnpm exec tsx scripts/prerender-blog.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts, type BlogPost } from '../src/data/blog';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir   = path.resolve(__dirname, '../dist-production');

// ── Markdown-like → HTML (mirrors BlogPost.tsx renderContent) ─────────────────
function esc(s: string): string {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function inlineMd(text: string): string {
  return esc(text).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function markdownToHtml(content: string): string {
  const lines = content.split('\n');
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      out.push(`<h2 style="font-size:1.4rem;font-weight:700;color:#0c1e24;margin:2rem 0 0.75rem">${esc(line.slice(3))}</h2>`);
    } else if (line.startsWith('### ')) {
      out.push(`<h3 style="font-size:1.1rem;font-weight:700;color:#0c1e24;margin:1.5rem 0 0.5rem">${esc(line.slice(4))}</h3>`);
    } else if (/^\*\*Q:.*\*\*$/.test(line)) {
      out.push(`<p style="font-weight:700;color:#0c1e24;margin:1.25rem 0 0.25rem">${esc(line.replace(/\*\*/g, ''))}</p>`);
    } else if (/^\*\*.*\*\*$/.test(line)) {
      out.push(`<p style="font-weight:700;color:#142E36;margin:1.25rem 0 0.5rem">${esc(line.replace(/\*\*/g, ''))}</p>`);
    } else if (line.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(`<li style="margin-bottom:0.4rem">${inlineMd(lines[i].slice(2))}</li>`);
        i++;
      }
      out.push(`<ul style="list-style:disc;padding-left:1.5rem;margin:0.75rem 0;color:#374151">${items.join('')}</ul>`);
      continue;
    } else if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(`<li style="margin-bottom:0.4rem">${inlineMd(lines[i].replace(/^\d+\. /, ''))}</li>`);
        i++;
      }
      out.push(`<ol style="list-style:decimal;padding-left:1.5rem;margin:0.75rem 0;color:#374151">${items.join('')}</ol>`);
      continue;
    } else if (line.trim() !== '') {
      out.push(`<p style="margin:0.75rem 0;color:#374151;line-height:1.75">${inlineMd(line)}</p>`);
    }
    i++;
  }
  return out.join('\n');
}

// ── Article HTML template ──────────────────────────────────────────────────────
function buildArticleHtml(post: BlogPost): string {
  const bodyHtml = markdownToHtml(post.content);
  return `<div style="font-family:Inter,system-ui,sans-serif;max-width:800px;margin:100px auto 60px;padding:0 24px;color:#1a1a1a;line-height:1.7">
  <a href="/blog" style="color:#0ea5e9;font-size:14px;text-decoration:none;display:inline-flex;align-items:center;gap:4px;margin-bottom:20px">&larr; Back to Blog</a>
  <div style="margin-top:8px">
    <span style="background:#fef3c7;color:#92400e;font-size:11px;font-weight:700;padding:3px 10px;border-radius:99px;text-transform:uppercase;letter-spacing:.05em">${esc(post.category)}</span>
  </div>
  <h1 style="font-size:2rem;font-weight:800;line-height:1.2;margin:16px 0 8px;color:#0c1e24">${esc(post.title)}</h1>
  <p style="color:#6b7280;font-size:14px;margin-bottom:28px">${esc(post.date)} &bull; ${esc(post.readTime)}</p>
  <img src="${esc(post.image)}" alt="${esc(post.title)}" style="width:100%;height:300px;object-fit:cover;border-radius:12px;margin-bottom:28px" loading="eager" />
  <p style="font-size:1.05rem;color:#374151;font-weight:500;border-left:4px solid #f59e0b;padding-left:16px;margin-bottom:32px;line-height:1.7">${esc(post.excerpt)}</p>
  <div>
    ${bodyHtml}
  </div>
  <div style="margin-top:48px;padding:32px;background:#f8fafc;border-radius:12px;text-align:center;border:1px solid #e2e8f0">
    <h3 style="font-size:1.2rem;font-weight:700;color:#0c1e24;margin:0 0 8px">Speak to an Expert</h3>
    <p style="color:#6b7280;font-size:14px;margin:0 0 20px">Have questions about this topic? Contact our DIFC specialists.</p>
    <a href="/contact" style="display:inline-block;background:oklch(68.5% 0.169 237.323);color:white;font-weight:600;padding:12px 32px;border-radius:99px;text-decoration:none;font-size:14px">Contact Us</a>
  </div>
</div>`;
}

// ── BlogPosting JSON-LD ────────────────────────────────────────────────────────
function isoDate(dateStr: string): string {
  try { return new Date(dateStr).toISOString().split('T')[0]; }
  catch { return '2026-01-01'; }
}

function buildBlogSchema(post: BlogPost): object {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": isoDate(post.date),
    "dateModified": isoDate(post.date),
    "url": `https://www.atlascorp.ae/blog/${post.slug}`,
    "mainEntityOfPage": `https://www.atlascorp.ae/blog/${post.slug}`,
    "author": {
      "@type": "Organization",
      "name": "Atlas Corporate Services",
      "url": "https://www.atlascorp.ae"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Atlas Corporate Services",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.atlascorp.ae/assets/logo-D-IPHjNp.png"
      }
    },
    "inLanguage": "en-GB",
    "articleSection": post.category,
    "keywords": `DIFC, Dubai International Financial Centre, Atlas Corporate Services, ${post.category}, ${post.title}`
  };
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Atlas Corporate Services",
  "url": "https://www.atlascorp.ae",
  "logo": "https://www.atlascorp.ae/assets/logo-D-IPHjNp.png",
  "description": "Atlas Corporate Services specialises in DIFC company formation, fund structuring, family office setup, compliance and ongoing corporate governance in Dubai."
};

// ── Patch each blog HTML file ──────────────────────────────────────────────────
let patched = 0;

for (const post of blogPosts) {
  const filePath = path.join(distDir, 'blog', post.slug, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.warn(`  ⚠️  Not found: blog/${post.slug}/index.html`);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf-8');

  // Replace everything inside <div id="root"> with article content
  const articleHtml = buildArticleHtml(post);
  html = html.replace(
    /<div id="root">[\s\S]*?(?=<\/body>)/,
    `<div id="root">${articleHtml}\n  `
  );

  // Remove all existing ld+json scripts (fix-meta-only put org schema there)
  html = html.replace(/<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');

  // Inject both org schema + BlogPosting schema before </head>
  const schemas = [
    `<script type="application/ld+json">${JSON.stringify(orgSchema)}</script>`,
    `<script type="application/ld+json">${JSON.stringify(buildBlogSchema(post))}</script>`
  ].join('\n  ');

  html = html.replace('</head>', `  ${schemas}\n  </head>`);

  fs.writeFileSync(filePath, html, 'utf-8');
  console.log(`  ✓  /blog/${post.slug}`);
  patched++;
}

console.log(`\n✅  Pre-rendered ${patched} blog pages with article content + BlogPosting schema\n`);
