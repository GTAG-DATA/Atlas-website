#!/bin/bash
set -e
echo "Using pre-built production files..."
mkdir -p artifacts/atlas-website/dist/public
cp -r artifacts/atlas-website/dist-production/* artifacts/atlas-website/dist/public/
echo "Done! Production files ready."
