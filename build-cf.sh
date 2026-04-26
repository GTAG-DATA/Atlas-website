#!/bin/bash
set -e
echo "Using pre-built SSG production files..."
mkdir -p artifacts/atlas-website/dist/public
cp -r artifacts/atlas-website/dist-production/* artifacts/atlas-website/dist/public/
echo "Done! SSG production files ready."
