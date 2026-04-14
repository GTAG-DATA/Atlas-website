# Atlas Blog Worker — Setup Guide

## What This Does
- Serves `/admin` — password-protected admin panel to create/edit/delete blog posts
- Serves `/blog/[slug]` — SSR blog pages from D1 (fully SEO-friendly HTML)
- Serves `/api/*` — REST API for the admin panel
- Stores posts in Cloudflare D1 (SQLite database)
- Caches rendered pages in Cloudflare KV

## Setup Steps

### 1. Install dependencies
```bash
cd cloudflare-worker
npm install
```

### 2. Create D1 Database
In Cloudflare Dashboard → Workers & Pages → D1:
- Click "Create database"
- Name: `atlas-blog`
- Copy the Database ID

### 3. Create KV Namespace
In Cloudflare Dashboard → Workers & Pages → KV:
- Click "Create namespace"
- Name: `atlas-blog-kv`
- Copy the Namespace ID

### 4. Update wrangler.toml
Replace the placeholder IDs:
```toml
database_id = "YOUR_D1_DATABASE_ID"
id = "YOUR_KV_NAMESPACE_ID"
```

### 5. Set secrets
```bash
npx wrangler secret put ADMIN_PASSWORD
# Enter your chosen admin password

npx wrangler secret put TOKEN_SECRET
# Enter any random string (e.g. a UUID)
```

### 6. Init database
```bash
npx wrangler d1 execute atlas-blog --file=./schema.sql
npx wrangler d1 execute atlas-blog --file=./seed.sql
```

### 7. Deploy
```bash
bash deploy.sh
```

### 8. Add Worker Routes in Cloudflare Dashboard
Go to your domain (atlascorp.ae) → Workers Routes → Add route:
- `atlascorp.ae/admin*` → atlas-blog
- `atlascorp.ae/api/*` → atlas-blog
- `atlascorp.ae/blog/*` → atlas-blog

## Admin Panel
Visit: `https://www.atlascorp.ae/admin`
Login with your ADMIN_PASSWORD

## Publishing a Post
1. Go to /admin → Login
2. Click "New Post"
3. Fill in: Title, Category, Date, Image URL, Excerpt, Content (markdown), FAQs
4. Toggle contact form on/off
5. Click "Publish" — post is live instantly at /blog/your-slug
