import type { Plugin } from "vite";
import react from "@vitejs/plugin-react";
import preserveDirectives from "rollup-preserve-directives";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // jsxImportSource: "automatic",
    }),
    preserveDirectives() as Plugin,
    dts({
      include: ["src"],
      tsconfigPath: "./tsconfig.app.json",
    }),
    tsconfigPaths({
      configNames: ["tsconfig.app.json"],
    }),
  ],

  build: {
    outDir: "./dist",
    cssCodeSplit: true,
    lib: {
      entry: "src/main.ts",
      name: "react",
      fileName: "react",
      formats: [
        "es",
        "cjs",
      ],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
      ],
      output: {
        exports: "named",
        preserveModules: true,
        interop: "auto",
        globals: {
          "react": "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    commonjsOptions: {
      strictRequires: true,
    },
  },
});
