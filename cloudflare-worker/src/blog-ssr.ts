import type { Env, Post, FAQ } from './types';

const SITE = 'https://www.atlascorp.ae';
const SITE_NAME = 'Atlas Corporate Services';

function esc(s: string): string {
  return String(s || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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
      out.push(`<h2>${esc(line.slice(3))}</h2>`);
    } else if (line.startsWith('### ')) {
      out.push(`<h3>${esc(line.slice(4))}</h3>`);
    } else if (/^\*\*Q:.*\*\*$/.test(line)) {
      out.push(`<p class="faq-q"><strong>${esc(line.replace(/\*\*/g, ''))}</strong></p>`);
    } else if (/^\*\*.*\*\*$/.test(line)) {
      out.push(`<p><strong>${esc(line.replace(/\*\*/g, ''))}</strong></p>`);
    } else if (line.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(`<li>${inlineMd(lines[i].slice(2))}</li>`);
        i++;
      }
      out.push(`<ul>${items.join('')}</ul>`);
      continue;
    } else if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(`<li>${inlineMd(lines[i].replace(/^\d+\. /, ''))}</li>`);
        i++;
      }
      out.push(`<ol>${items.join('')}</ol>`);
      continue;
    } else if (line.trim() !== '') {
      out.push(`<p>${inlineMd(line)}</p>`);
    }
    i++;
  }
  return out.join('\n');
}

function buildFaqSchema(faqs: FAQ[], post: Post): string {
  if (!faqs.length) return '';
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

function buildBlogSchema(post: Post): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.meta_description || post.excerpt,
    image: post.image_url,
    datePublished: post.date,
    dateModified: post.updated_at || post.date,
    url: `${SITE}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE },
    publisher: {
      '@type': 'Organization', name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE}/assets/logo-D-IPHjNp.png` }
    },
    inLanguage: 'en-GB',
    articleSection: post.category,
    keywords: `DIFC, Dubai, ${post.category}, ${SITE_NAME}, ${post.title}`
  };
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

function buildOrgSchema(): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE,
    logo: `${SITE}/assets/logo-D-IPHjNp.png`,
    description: 'Atlas Corporate Services specialises in DIFC company formation, fund structuring, family office setup and compliance support in Dubai.',
    contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', areaServed: 'AE' }
  };
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

export function renderBlogPage(post: Post): string {
  const faqs: FAQ[] = (() => { try { return JSON.parse(post.faqs || '[]'); } catch { return []; } })();
  const seoTitle = `${post.seo_title || post.title} | ${SITE_NAME}`;
  const metaDesc = post.meta_description || post.excerpt;
  const canonical = `${SITE}/blog/${post.slug}`;
  const bodyHtml = markdownToHtml(post.content);

  const faqsHtml = faqs.length ? `
    <section class="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-list">
        ${faqs.map((f, i) => `
          <div class="faq-item" id="faq-${i + 1}">
            <div class="faq-q-row" onclick="toggleFaq(${i})">
              <span class="faq-num">Q${i + 1}</span>
              <span class="faq-question">${esc(f.question)}</span>
              <span class="faq-icon" id="faq-icon-${i}">+</span>
            </div>
            <div class="faq-answer" id="faq-answer-${i}" style="display:none">
              <p>${esc(f.answer)}</p>
            </div>
          </div>`).join('')}
      </div>
    </section>` : '';

  const contactFormHtml = post.show_contact_form ? `
    <section class="contact-form-section">
      <div class="cf-inner">
        <p class="cf-label">Speak to an Expert</p>
        <h2 class="cf-title">Enquire About This Topic</h2>
        <p class="cf-sub">Have questions about ${esc(post.category.toLowerCase())} matters in the DIFC? Our specialists are ready for a free initial consultation.</p>
        <form class="cf-form" id="enquiry-form" onsubmit="submitEnquiry(event)">
          <div class="cf-row">
            <div class="cf-field">
              <label>Full Name <span>*</span></label>
              <input type="text" name="name" required placeholder="Your full name" />
            </div>
            <div class="cf-field">
              <label>Email Address <span>*</span></label>
              <input type="email" name="email" required placeholder="your@email.com" />
            </div>
          </div>
          <div class="cf-field">
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="+971 50 000 0000" />
          </div>
          <div class="cf-field">
            <label>Your Message <span>*</span></label>
            <textarea name="message" required rows="4" placeholder="Tell us about your requirements..."></textarea>
          </div>
          <button type="submit" class="cf-btn">Send Enquiry</button>
          <p class="cf-privacy">By submitting this form you agree to be contacted by Atlas Corporate Services.</p>
        </form>
        <div id="cf-success" style="display:none;text-align:center;padding:32px">
          <div style="font-size:48px;margin-bottom:12px">✓</div>
          <h3 style="color:#0c1e24;margin:0 0 8px">Thank You</h3>
          <p style="color:#6b7280;font-size:14px">We will be in touch shortly.</p>
        </div>
      </div>
    </section>` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#0c1e24" />
  <title>${esc(seoTitle)}</title>
  <meta name="description" content="${esc(metaDesc)}" />
  <link rel="canonical" href="${esc(canonical)}" />
  <meta property="og:title" content="${esc(seoTitle)}" />
  <meta property="og:description" content="${esc(metaDesc)}" />
  <meta property="og:url" content="${esc(canonical)}" />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="${esc(post.image_url || `${SITE}/opengraph.jpg`)}" />
  <meta property="og:site_name" content="${esc(SITE_NAME)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(seoTitle)}" />
  <meta name="twitter:description" content="${esc(metaDesc)}" />
  <meta name="twitter:image" content="${esc(post.image_url || `${SITE}/opengraph.jpg`)}" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  ${buildOrgSchema()}
  ${buildBlogSchema(post)}
  ${buildFaqSchema(faqs, post)}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Inter',system-ui,sans-serif;background:#fff;color:#1a1a1a;line-height:1.7}
    a{color:inherit;text-decoration:none}
    img{max-width:100%;display:block}

    /* Navbar */
    .nav{position:fixed;top:0;left:0;right:0;z-index:50;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.08);padding:16px 0}
    .nav-inner{max-width:1200px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between}
    .nav-logo{display:flex;align-items:center;gap:10px}
    .nav-logo img{height:36px;object-fit:contain}
    .nav-links{display:flex;gap:28px;align-items:center}
    .nav-links a{font-size:14px;color:#111;transition:color .2s}
    .nav-links a:hover{color:#0ea5e9}
    .nav-cta{background:#0c1e24;color:#fff;font-size:13px;font-weight:600;padding:9px 20px;border-radius:99px;transition:background .2s}
    .nav-cta:hover{background:#142e36}

    /* Hero */
    .hero{background:#0c1e24;padding:120px 24px 0}
    .hero-inner{max-width:900px;margin:0 auto}
    .hero-back{display:inline-flex;align-items:center;gap:6px;color:#f59e0b;font-size:14px;margin-bottom:24px;transition:color .2s}
    .hero-back:hover{color:#fbbf24}
    .hero-badge{display:inline-block;background:rgba(245,158,11,.15);color:#f59e0b;font-size:11px;font-weight:700;padding:3px 12px;border-radius:99px;text-transform:uppercase;letter-spacing:.06em;margin-bottom:16px}
    .hero-title{font-size:clamp(1.6rem,4vw,2.4rem);font-weight:800;color:#fff;line-height:1.2;max-width:700px;margin-bottom:16px}
    .hero-meta{display:flex;gap:20px;color:rgba(255,255,255,.55);font-size:13px;margin-bottom:0}
    .hero-img-wrap{max-width:900px;margin:24px auto 0}
    .hero-img{width:100%;height:320px;object-fit:cover;border-radius:12px 12px 0 0}

    /* Content */
    .content-section{padding:48px 24px 64px}
    .content-inner{max-width:900px;margin:0 auto;display:grid;grid-template-columns:1fr 260px;gap:48px;align-items:start}
    @media(max-width:768px){.content-inner{grid-template-columns:1fr}.sidebar{order:-1}}

    /* Article */
    .article{min-width:0}
    .article-lede{font-size:1.05rem;color:#374151;font-weight:500;border-left:4px solid #f59e0b;padding-left:18px;margin-bottom:36px;line-height:1.75}
    .article p{color:#374151;line-height:1.8;margin:16px 0}
    .article h2{font-size:1.35rem;font-weight:700;color:#0c1e24;margin:40px 0 12px}
    .article h3{font-size:1.1rem;font-weight:700;color:#142e36;margin:28px 0 8px}
    .article ul,.article ol{padding-left:24px;margin:16px 0;color:#374151}
    .article li{margin-bottom:6px;line-height:1.7}
    .article strong{color:#0c1e24;font-weight:600}
    .faq-q{font-weight:700;color:#0c1e24;margin:24px 0 4px}

    /* Sidebar */
    .sidebar{position:sticky;top:88px}
    .sidebar-cta{background:#0c1e24;border-radius:12px;padding:24px;color:#fff;margin-bottom:16px}
    .sidebar-cta h3{font-size:1rem;font-weight:700;margin-bottom:8px}
    .sidebar-cta p{font-size:13px;color:rgba(255,255,255,.7);margin-bottom:16px}
    .sidebar-btn{display:block;background:oklch(68.5% 0.169 237.323);color:#fff;font-size:13px;font-weight:600;text-align:center;padding:11px 16px;border-radius:8px;transition:opacity .2s}
    .sidebar-btn:hover{opacity:.9}
    .sidebar-recent{border:1px solid #e5e7eb;border-radius:12px;padding:20px}
    .sidebar-recent h3{font-size:14px;font-weight:700;color:#0c1e24;margin-bottom:16px}
    .recent-list{list-style:none;display:flex;flex-direction:column;gap:12px}
    .recent-item a{display:block}
    .recent-item .rt{font-size:13px;font-weight:500;color:#374151;line-height:1.4;margin-bottom:3px;transition:color .2s}
    .recent-item a:hover .rt{color:#f59e0b}
    .recent-item .rc{font-size:11px;color:#9ca3af}

    /* FAQ section */
    .faq-section{margin-top:48px;padding-top:48px;border-top:1px solid #e5e7eb}
    .faq-section h2{font-size:1.5rem;font-weight:700;color:#0c1e24;margin-bottom:24px}
    .faq-list{display:flex;flex-direction:column;gap:0}
    .faq-item{border-bottom:1px solid #e5e7eb}
    .faq-q-row{display:flex;align-items:center;gap:12px;padding:16px 0;cursor:pointer}
    .faq-num{background:#f59e0b;color:#0c1e24;font-size:11px;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0}
    .faq-question{flex:1;font-size:15px;font-weight:600;color:#0c1e24}
    .faq-icon{color:#9ca3af;font-size:20px;font-weight:300;flex-shrink:0}
    .faq-answer{padding:0 0 16px 36px}
    .faq-answer p{color:#374151;font-size:14px;line-height:1.75}

    /* Contact form */
    .contact-form-section{background:#f8fafc;border-top:1px solid #e5e7eb;padding:64px 24px}
    .cf-inner{max-width:700px;margin:0 auto}
    .cf-label{color:oklch(68.5% 0.169 237.323);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px}
    .cf-title{font-size:1.8rem;font-weight:800;color:#0c1e24;margin-bottom:8px}
    .cf-sub{color:#6b7280;font-size:15px;margin-bottom:32px}
    .cf-form{background:#fff;border-radius:16px;border:1px solid #e5e7eb;padding:32px;display:flex;flex-direction:column;gap:20px}
    .cf-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}
    @media(max-width:600px){.cf-row{grid-template-columns:1fr}}
    .cf-field{display:flex;flex-direction:column;gap:6px}
    .cf-field label{font-size:13px;font-weight:500;color:#374151}
    .cf-field label span{color:#ef4444}
    .cf-field input,.cf-field textarea{border:1px solid #d1d5db;border-radius:8px;padding:10px 14px;font-size:14px;font-family:inherit;outline:none;transition:border-color .2s}
    .cf-field input:focus,.cf-field textarea:focus{border-color:#0c1e24}
    .cf-field textarea{resize:none}
    .cf-btn{background:oklch(68.5% 0.169 237.323);color:#fff;font-weight:600;font-size:14px;padding:13px 24px;border-radius:99px;border:none;cursor:pointer;font-family:inherit;transition:opacity .2s}
    .cf-btn:hover{opacity:.9}
    .cf-privacy{font-size:11px;color:#9ca3af;text-align:center}

    /* Footer */
    .footer{background:#0c1e24;color:rgba(255,255,255,.6);padding:32px 24px;text-align:center;font-size:13px}
    .footer a{color:#f59e0b}
  </style>
</head>
<body>
  <nav class="nav">
    <div class="nav-inner">
      <a class="nav-logo" href="/">
        <img src="/favicon.png" alt="${esc(SITE_NAME)}" />
      </a>
      <div class="nav-links">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/insights">Insights</a>
        <a href="/blog">Blog</a>
        <a href="/contact" class="nav-cta">Book a Consultation</a>
      </div>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-inner">
      <a class="hero-back" href="/blog">&#8592; Back to Blog</a>
      <div class="hero-badge">${esc(post.category)}</div>
      <h1 class="hero-title">${esc(post.title)}</h1>
      <div class="hero-meta">
        <span>&#128197; ${esc(post.date)}</span>
        <span>&#128336; ${esc(post.read_time)}</span>
      </div>
    </div>
    <div class="hero-img-wrap">
      <img class="hero-img" src="${esc(post.image_url || '')}" alt="${esc(post.title)}" loading="eager" />
    </div>
  </section>

  <section class="content-section">
    <div class="content-inner">
      <article class="article">
        <p class="article-lede">${esc(post.excerpt)}</p>
        <div>${bodyHtml}</div>
        ${faqsHtml}
      </article>

      <aside class="sidebar">
        <div class="sidebar-cta">
          <h3>Need Expert Advice?</h3>
          <p>Speak to the Atlas team about your DIFC corporate services requirements.</p>
          <a class="sidebar-btn" href="/contact">Get in Touch</a>
        </div>
        <div class="sidebar-recent" id="recent-posts">
          <h3>Recent Articles</h3>
          <ul class="recent-list" id="recent-list">
            <li style="color:#9ca3af;font-size:13px">Loading...</li>
          </ul>
        </div>
      </aside>
    </div>
  </section>

  ${contactFormHtml}

  <footer class="footer">
    <p>&copy; ${new Date().getFullYear()} <a href="/">${esc(SITE_NAME)}</a>. All rights reserved. Dubai International Financial Centre.</p>
  </footer>

  <script>
    // Load recent posts
    fetch('/api/posts/recent?exclude=${esc(post.slug)}')
      .then(r => r.json())
      .then(data => {
        const list = document.getElementById('recent-list');
        if (!list) return;
        const posts = data.posts || [];
        if (!posts.length) { list.innerHTML = '<li style="color:#9ca3af;font-size:13px">No other posts yet.</li>'; return; }
        list.innerHTML = posts.map(p => \`
          <li class="recent-item">
            <a href="/blog/\${p.slug}">
              <div class="rt">\${p.title}</div>
              <div class="rc">\${p.category}</div>
            </a>
          </li>
        \`).join('');
      }).catch(() => {
        const list = document.getElementById('recent-list');
        if (list) list.innerHTML = '';
      });

    // FAQ toggle
    function toggleFaq(i) {
      const ans = document.getElementById('faq-answer-' + i);
      const icon = document.getElementById('faq-icon-' + i);
      if (!ans) return;
      const open = ans.style.display !== 'none';
      ans.style.display = open ? 'none' : 'block';
      if (icon) icon.textContent = open ? '+' : '−';
    }

    // Contact form
    function submitEnquiry(e) {
      e.preventDefault();
      const form = document.getElementById('enquiry-form');
      const success = document.getElementById('cf-success');
      if (form) form.style.display = 'none';
      if (success) success.style.display = 'block';
    }
  </script>
</body>
</html>`;
}

// Serve a blog post from D1 with KV caching
export async function handleBlogSSR(request: Request, env: Env, slug: string): Promise<Response> {
  // Check KV cache
  const cached = await env.KV.get(`blog:${slug}`, 'text');
  if (cached) {
    return new Response(cached, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=300',
        'X-Cache': 'HIT'
      }
    });
  }

  // Fetch from D1
  const post = await env.DB.prepare(
    'SELECT * FROM posts WHERE slug = ? AND published = 1'
  ).bind(slug).first() as Post | null;

  if (!post) return new Response(null, { status: 404 });

  const html = renderBlogPage(post);

  // Cache for 5 minutes
  await env.KV.put(`blog:${slug}`, html, { expirationTtl: 300 });

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'public, max-age=300',
      'X-Cache': 'MISS'
    }
  });
}
