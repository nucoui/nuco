import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 5229,
  },
  plugins: [
    Icons({
      autoInstall: true,
      compiler: "jsx",
      jsx: "react",
    }),
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart({
      // customViteReactPlugin: true,
      target: "cloudflare-module",
      sitemap: {
        host: "https://nuco.takumaru.dev",
        enabled: true,
        outputPath: "sitemap.xml",
      },
      pages: [
        // Top level pages
        {
          path: "/",
          sitemap: {
            priority: 1.0,
            changefreq: "always",
          },
        },
        {
          path: "/en",
          sitemap: {
            priority: 0.9,
            changefreq: "daily",
          },
        },
        // Documentation root
        {
          path: "/en/docs",
          sitemap: {
            priority: 0.8,
            changefreq: "weekly",
          },
        },
        // Getting Started
        {
          path: "/en/docs/getting-started",
          sitemap: {
            priority: 0.7,
            changefreq: "weekly",
          },
        },
        // React framework section
        {
          path: "/en/docs/react",
          sitemap: {
            priority: 0.7,
            changefreq: "weekly",
          },
        },
        {
          path: "/en/docs/react/installation",
          sitemap: {
            priority: 0.6,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/overview",
          sitemap: {
            priority: 0.6,
            changefreq: "monthly",
          },
        },
        // React components
        {
          path: "/en/docs/react/components/anchor",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/badge",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/breadcrumb",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/button",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/codeblock",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/divider",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/error",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/h1",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/h2",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/h3",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/h4",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/h5",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/h6",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/header",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/input",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/li",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/navaccordion",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/option",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/pager",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/pagers",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/select",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/react/components/ul",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        // Web Components framework section
        {
          path: "/en/docs/web-components",
          sitemap: {
            priority: 0.7,
            changefreq: "weekly",
          },
        },
        {
          path: "/en/docs/web-components/installation",
          sitemap: {
            priority: 0.6,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/overview",
          sitemap: {
            priority: 0.6,
            changefreq: "monthly",
          },
        },
        // Web Components components
        {
          path: "/en/docs/web-components/components/anchor",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/badge",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/breadcrumb",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/button",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/codeblock",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/divider",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/error",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/h1",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/h2",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/h3",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/h4",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/h5",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/h6",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/header",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/input",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/li",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/navaccordion",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/option",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/pager",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/pagers",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/select",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
        {
          path: "/en/docs/web-components/components/ul",
          sitemap: {
            priority: 0.5,
            changefreq: "monthly",
          },
        },
      ],
    }),
  ],
});
