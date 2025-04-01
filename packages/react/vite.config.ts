import type { Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
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
      outDir: "./dist/types",
      tsconfigPath: "./tsconfig.app.json",
    }),
    tsconfigPaths({
      configNames: ["tsconfig.app.json"],
    }),
    visualizer({
      open: false,
      filename: "stats.html",
      gzipSize: true,
      template: "treemap",
    }),
  ],

  build: {
    outDir: "./dist",
    cssCodeSplit: true,
    lib: {
      entry: [
        "src/components/wrapped/Anchor.tsx",
        "src/components/wrapped/Badge.tsx",
        "src/components/wrapped/Breadcrumb.tsx",
        "src/components/wrapped/Button.tsx",
        "src/components/wrapped/CodeBlock.tsx",
        "src/components/wrapped/Divider.tsx",
        "src/components/wrapped/Error.tsx",
        "src/components/wrapped/H1.tsx",
        "src/components/wrapped/H2.tsx",
        "src/components/wrapped/H3.tsx",
        "src/components/wrapped/H4.tsx",
        "src/components/wrapped/H5.tsx",
        "src/components/wrapped/H6.tsx",
        "src/components/wrapped/Header.tsx",
        "src/components/wrapped/Input.tsx",
        "src/components/wrapped/Li.tsx",
        "src/components/wrapped/NavAccordion.tsx",
        "src/components/wrapped/Option.tsx",
        "src/components/wrapped/Select.tsx",
        "src/components/wrapped/Ul.tsx",
        "src/main.ts",
      ],
      name: "react",
      fileName: (format, entryName) => {
        if (format === "cjs") {
          return `${entryName}.cjs`;
        }

        if (format === "es") {
          return `${entryName}.js`;
        }

        return `${entryName}.${format}.js`;
      },
      formats: [
        "es",
        "cjs",
      ],
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "react-dom",
        "shiki",
        "@nuco/variable",
      ],
      output: {
        exports: "named",
        preserveModules: true,
        interop: "auto",
        globals: {
          "react": "React",
          "react-dom": "ReactDOM",
          "shiki": "shiki",
          "@nuco/variable": "nucoVariable",
        },
      },
    },
    commonjsOptions: {
      strictRequires: true,
    },
  },
});
