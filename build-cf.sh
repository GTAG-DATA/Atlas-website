#!/bin/bash
set -e

echo "Removing lockfile to avoid frozen-lockfile mismatch..."
rm -f pnpm-lock.yaml

echo "Installing dependencies..."
pnpm install --no-frozen-lockfile

echo "Building atlas-website..."
pnpm --filter @workspace/atlas-website build
