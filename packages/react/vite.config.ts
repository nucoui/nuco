import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
      entry: "src/main.tsx",
      name: "react",
      fileName: "react",
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        exports: "named",
        manualChunks: undefined,
        globals: {
          "react": "React",
          "react-dom": "ReactDOM",
        },
        banner: "\"use client\";\n", // ここでバナーを追加
      },
    },
    commonjsOptions: {
      strictRequires: true,
    },
  },
});
