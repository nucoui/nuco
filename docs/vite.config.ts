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
      target: "cloudflare-module",
      sitemap: {
        host: "https://nuco.takumaru.dev",
        enabled: true,
        outputPath: "sitemap.xml",
      },
      pages: [
        {
          path: "/",
          sitemap: {
            priority: 1.0,
            changefreq: "always",
          },
        },
        // TODO: Add more pages to the sitemap
      ],
    }),
  ],
});
