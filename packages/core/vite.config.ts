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
    outDir: "./dist",
    cssCodeSplit: true,
    lib: {
      entry: "src/main.ts",
      name: "core",
      fileName: "core",
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
