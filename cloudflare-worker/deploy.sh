#!/bin/bash
# Atlas Blog Worker — Deploy Script
# Run: bash deploy.sh

set -e

echo "📦 Building worker (inlining admin HTML)..."
node build.mjs

echo "🚀 Deploying to Cloudflare Workers..."
npx wrangler deploy --config wrangler.toml

echo "✅ Done! Worker deployed."
echo ""
echo "📋 Next steps if first deploy:"
echo "   1. npx wrangler d1 execute atlas-blog --file=./schema.sql"
echo "   2. npx wrangler d1 execute atlas-blog --file=./seed.sql"
echo "   3. npx wrangler secret put ADMIN_PASSWORD"
echo "   4. npx wrangler secret put TOKEN_SECRET"
