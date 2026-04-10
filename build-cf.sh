#!/bin/bash
set -e

echo "Installing dependencies..."
pnpm install --frozen-lockfile=false

echo "Building atlas-website..."
pnpm --filter @workspace/atlas-website build
