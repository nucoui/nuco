import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import Unfonts from "unplugin-fonts/vite";
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
    Unfonts({
      google: {
        families: [
          {
            name: "Poppins",
            styles: "ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900",
            defer: true,
          },
          {
            name: "Noto Sans JP",
            styles: "ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700",
            defer: true,
          },
        ],
      },
    }),
    dts({ tsconfigPath: resolve(__dirname, "tsconfig.app.json") }),
    tsconfigPaths({
      configNames: ["tsconfig.app.json"],
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
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      // external: ["vue"],
      output: {
        exports: "named",
        manualChunks: undefined,
      },
    },
  },
});
