/**
 * Atlas Corporate Services — SSR entry point
 *
 * Used at build time by scripts/prerender.mjs to generate static HTML
 * for each route via React's renderToString. This file is never loaded
 * in the browser — only in Node.js during the SSG build step.
 */

import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import type { FilledContext } from "react-helmet-async";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Insights from "./pages/Insights";
import InsightArticle from "./pages/InsightArticle";

export function render(url: string): {
  html: string;
  helmet: FilledContext["helmet"];
} {
  const helmetContext: Partial<FilledContext> = {};
  const queryClient = new QueryClient();

  // Static location hook — tells wouter which URL to render
  const useStaticLocation = () =>
    [url, () => {}] as [string, (to: string) => void];

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <WouterRouter hook={useStaticLocation}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/service/:slug" component={ServiceDetail} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog/:slug" component={BlogPost} />
            <Route path="/insights" component={Insights} />
            <Route path="/insights/:slug" component={InsightArticle} />
          </Switch>
        </WouterRouter>
      </QueryClientProvider>
    </HelmetProvider>,
  );

  return {
    html,
    helmet: (helmetContext as FilledContext).helmet,
  };
}
