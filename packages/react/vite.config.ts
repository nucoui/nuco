import type { Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import preserveDirectives from "rollup-preserve-directives";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

const COMPONENT_PATH = [
  "src/components/wrapped/Anchor/Anchor.cc.tsx",
  "src/components/wrapped/Anchor/Anchor.sc.tsx",
  "src/components/wrapped/Badge/Badge.cc.tsx",
  "src/components/wrapped/Badge/Badge.sc.tsx",
  "src/components/wrapped/Breadcrumb/Breadcrumb.cc.tsx",
  "src/components/wrapped/Breadcrumb/Breadcrumb.sc.tsx",
  "src/components/wrapped/Button/Button.cc.tsx",
  "src/components/wrapped/Button/Button.sc.tsx",
  "src/components/wrapped/CodeBlock/CodeBlock.cc.tsx",
  "src/components/wrapped/CodeBlock/CodeBlock.sc.tsx",
  "src/components/wrapped/Divider/Divider.cc.tsx",
  "src/components/wrapped/Divider/Divider.sc.tsx",
  "src/components/wrapped/Error/Error.cc.tsx",
  "src/components/wrapped/Error/Error.sc.tsx",
  "src/components/wrapped/H1/H1.cc.tsx",
  "src/components/wrapped/H1/H1.sc.tsx",
  "src/components/wrapped/H2/H2.cc.tsx",
  "src/components/wrapped/H2/H2.sc.tsx",
  "src/components/wrapped/H3/H3.cc.tsx",
  "src/components/wrapped/H3/H3.sc.tsx",
  "src/components/wrapped/H4/H4.cc.tsx",
  "src/components/wrapped/H4/H4.sc.tsx",
  "src/components/wrapped/H5/H5.cc.tsx",
  "src/components/wrapped/H5/H5.sc.tsx",
  "src/components/wrapped/H6/H6.cc.tsx",
  "src/components/wrapped/H6/H6.sc.tsx",
  "src/components/wrapped/Header/Header.cc.tsx",
  "src/components/wrapped/Header/Header.sc.tsx",
  "src/components/wrapped/Input/Input.cc.tsx",
  "src/components/wrapped/Input/Input.sc.tsx",
  "src/components/wrapped/Li/Li.cc.tsx",
  "src/components/wrapped/Li/Li.sc.tsx",
  "src/components/wrapped/NavAccordion/NavAccordion.cc.tsx",
  "src/components/wrapped/NavAccordion/NavAccordion.sc.tsx",
  "src/components/wrapped/Option/Option.cc.tsx",
  "src/components/wrapped/Option/Option.sc.tsx",
  "src/components/wrapped/Select/Select.cc.tsx",
  "src/components/wrapped/Select/Select.sc.tsx",
  "src/components/wrapped/Ul/Ul.cc.tsx",
  "src/components/wrapped/Ul/Ul.sc.tsx"
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
