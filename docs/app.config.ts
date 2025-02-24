import { defineConfig } from "@tanstack/start/config";
import { cloudflare } from "unenv";
// import Unfonts from "unplugin-fonts/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    preset: "cloudflare-pages",
    unenv: cloudflare,
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      // Unfonts({
      //   google: {
      //     families: [
      //       {
      //         name: "Poppins",
      //         styles: "ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900",
      //         defer: true,
      //       },
      //       {
      //         name: "Noto Sans JP",
      //         styles: "ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700",
      //         defer: true,
      //       },
      //     ],
      //   },
      // }),
    ],
    build: {
      rollupOptions: {
        external: ["node:fs", "node:path"],
      },
    },
  },
});
