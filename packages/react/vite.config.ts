import type { Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import preserveDirectives from "rollup-preserve-directives";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

const COMPONENT_PATH = [
  "src/components/Anchor.tsx",
  "src/components/Badge.tsx",
  "src/components/Breadcrumb.tsx",
  "src/components/Button.tsx",
  "src/components/CodeBlock.tsx",
  "src/components/Divider.tsx",
  "src/components/Error.tsx",
  "src/components/H1.tsx",
  "src/components/H2.tsx",
  "src/components/H3.tsx",
  "src/components/H4.tsx",
  "src/components/H5.tsx",
  "src/components/H6.tsx",
  "src/components/Header.tsx",
  "src/components/Input.tsx",
  "src/components/Li.tsx",
  "src/components/NavAccordion.tsx",
  "src/components/Option.tsx",
  "src/components/Pager.tsx",
  "src/components/Pagers.tsx",
  "src/components/Select.tsx",
  "src/components/Ul.tsx",
];

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

  define: {
    __VUE_OPTIONS_API__: "false",
    __VUE_PROD_DEVTOOLS__: "false",
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
  },

  build: {
    outDir: "./dist",
    cssCodeSplit: true,
    lib: {
      entry: [
        ...COMPONENT_PATH,
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
