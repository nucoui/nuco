import { resolve } from "node:path";
import preserveDirectives from "rollup-preserve-directives";
import Icons from "unplugin-icons/vite";
import { defineConfig, type Plugin } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

const COMPONENT_PATH = [
  "src/components/NButton/NButton.tsx",
  "src/components/NH1/NH1.tsx",
  "src/components/NH2/NH2.tsx",
  "src/components/NH3/NH3.tsx",
  "src/components/NH4/NH4.tsx",
  "src/components/NH5/NH5.tsx",
  "src/components/NH6/NH6.tsx",
  "src/components/NHeader/NHeader.tsx",
  "src/components/NInput/NInput.tsx",
  "src/components/NLi/NLi.tsx",
  "src/components/NOption/NOption.tsx",
  "src/components/NSelect/NSelect.tsx",
  "src/components/NUl/NUl.tsx",
];

export default defineConfig({
  plugins: [
    dts({
      outDir: "./dist/types",
      tsconfigPath: resolve(__dirname, "tsconfig.json"),
    }),
    Icons({
      autoInstall: true,
      compiler: "raw",
    }) as Plugin,
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
