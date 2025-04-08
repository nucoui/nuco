import type { Plugin } from "vite";
import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import { visualizer } from "rollup-plugin-visualizer";
import preserveDirectives from "rollup-preserve-directives";
import Icons from "unplugin-icons/vite";
import VueMacros from "unplugin-vue-macros/vite";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

const COMPONENT_PATH = [
  "src/components/common/NAnchor/NAnchor.ce.ts",
  "src/components/common/NButton/NButton.ce.ts",
  "src/components/common/NDivider/NDivider.ce.ts",
  "src/components/common/NH1/NH1.ce.ts",
  "src/components/common/NH2/NH2.ce.ts",
  "src/components/common/NH3/NH3.ce.ts",
  "src/components/common/NH4/NH4.ce.ts",
  "src/components/common/NH5/NH5.ce.ts",
  "src/components/common/NH6/NH6.ce.ts",
  "src/components/common/NHeader/NHeader.ce.ts",
  "src/components/common/NInput/NInput.ce.ts",
  "src/components/common/NLi/NLi.ce.ts",
  "src/components/common/NOption/NOption.ce.ts",
  "src/components/common/NSelect/NSelect.ce.ts",
  "src/components/common/NUl/NUl.ce.ts",
  "src/components/composite/NBadge/NBadge.ce.ts",
  "src/components/composite/NBreadcrumb/NBreadcrumb.ce.ts",
  "src/components/composite/NCodeBlock/NCodeBlock.ce.ts",
  "src/components/composite/NError/NError.ce.ts",
  "src/components/composite/NNavAccordion/NNavAccordion.ce.ts",
  "src/components/composite/NPager/NPager.ce.ts",
  "src/components/composite/NPagers/NPagers.ce.ts",
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: vue(),
        vueJsx: VueJsx(),
      },
    }),
    Icons({
      autoInstall: true,
    }) as Plugin,
    dts({
      outDir: "./dist/types",
      tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
    }),
    tsconfigPaths({
      configNames: ["tsconfig.app.json"],
    }),
    preserveDirectives(),
    visualizer({
      open: false,
      filename: "stats.html",
      gzipSize: true,
      template: "treemap",
    }),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },

  define: {
    __VUE_OPTIONS_API__: "false",
    __VUE_PROD_DEVTOOLS__: "false",
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
  },

  build: {
    outDir: "dist",
    cssCodeSplit: true,
    lib: {
      entry: [
        ...COMPONENT_PATH,
        "src/utils/elements.ts",
        "src/utils/resisterElement.ts",
        "src/main.ts",
      ],
      name: "core",
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
        "vue",
        "shiki",
        "@shikijs/twoslash",
      ],
      output: {
        exports: "named",
        preserveModules: true,
        inlineDynamicImports: false,
        manualChunks: undefined,
        globals: {
          "vue": "Vue",
          "shiki": "shiki",
          "@shikijs/twoslash": "@shikijs/twoslash",
        },
      },
    },
  },
});
