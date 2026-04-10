#!/bin/bash
set -e
echo "Using pre-built production files..."
mkdir -p artifacts/atlas-website/dist/public
cp -r artifacts/atlas-website/dist-production/* artifacts/atlas-website/dist/public/
echo "Done! Production files ready."

echo "Running static HTML pre-renderer for SEO..."
node artifacts/atlas-website/scripts/prerender.mjs
echo "Pre-rendering complete!"

# CF Pages v3 SPA fallback: serve 404.html for any unmatched URL
# This replaces the broken '/* /index.html 200' _redirects pattern
echo "Creating 404.html SPA fallback..."
cp artifacts/atlas-website/dist/public/index.html artifacts/atlas-website/dist/public/404.html
echo "Done!"
