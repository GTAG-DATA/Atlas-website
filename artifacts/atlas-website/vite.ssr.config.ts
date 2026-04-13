/**
 * Vite SSR config — used only during the local SSG build step.
 * Produces a Node.js bundle at dist/server/entry-server.js which
 * scripts/prerender.mjs imports to call renderToString for each route.
 *
 * Key differences from the browser config:
 *  - No Tailwind (CSS not needed for server rendering)
 *  - No Replit plugins
 *  - Asset imports are stubbed (images return "" — fine for SSG text content)
 *  - ssr: true enables server-side bundling
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

function stubAssets(): import("vite").Plugin {
  return {
    name: "stub-assets",
    enforce: "pre",
    resolveId(id) {
      if (/\.(png|jpg|jpeg|gif|svg|webp|ico|avif)$/.test(id)) {
        return "\0stub-asset:" + id;
      }
    },
    load(id) {
      if (id.startsWith("\0stub-asset:")) {
        return "export default ''";
      }
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [stubAssets(), react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    ssr: true,
    outDir: path.resolve(import.meta.dirname, "dist/server"),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(import.meta.dirname, "src/entry-server.tsx"),
      output: {
        format: "esm",
      },
    },
  },
  ssr: {
    // Bundle these rather than treating them as externals so the
    // Node.js output is a single self-contained ESM file.
    noExternal: ["react-helmet-async", "wouter"],
  },
});
