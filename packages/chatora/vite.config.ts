import { resolve } from "node:path";
import preserveDirectives from "rollup-preserve-directives";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

const COMPONENT_PATH = [
  "src/components/NButton/index.ts",
];

export default defineConfig({
  plugins: [
    dts({
      outDir: "./dist/types",
      tsconfigPath: resolve(__dirname, "tsconfig.json"),
    }),
    tsconfigPaths({
      configNames: ["tsconfig.json"],
    }),
    preserveDirectives(),
  ],

  build: {
    outDir: "dist",
    cssCodeSplit: true,
    lib: {
      entry: [
        ...COMPONENT_PATH,
        "src/elements/customElements.ts",
        "src/elements/declarativeCustomElements.ts",
        "src/elements/elements.ts",
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
        "chatora",
      ],
      output: {
        exports: "named",
        preserveModules: true,
        inlineDynamicImports: false,
        manualChunks: undefined,
        globals: {
          chatora: "Chatora",
        },
      },
    },
  },
});
