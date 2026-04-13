#!/bin/bash
set -e
echo "Using pre-built SSG production files..."
mkdir -p artifacts/atlas-website/dist/public
cp -r artifacts/atlas-website/dist-production/* artifacts/atlas-website/dist/public/
echo "Done! SSG production files ready."

# CF Pages v3 SPA fallback: serve 404.html for any unmatched URL
# This replaces the broken '/* /index.html 200' _redirects pattern
echo "Creating 404.html SPA fallback..."
cp artifacts/atlas-website/dist/public/index.html artifacts/atlas-website/dist/public/404.html
echo "Done!"
