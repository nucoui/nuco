import vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import VueMacros from "unplugin-vue-macros/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [VueMacros({
    plugins: {
      vue: vue(),
      vueJsx: VueJsx(),
    },
  })],
});
