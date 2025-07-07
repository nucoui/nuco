import { resolve } from "node:path";
import { visualizer } from "rollup-plugin-visualizer";
import preserveDirectives from "rollup-preserve-directives";
import Icons from "unplugin-icons/vite";
import { defineConfig, type Plugin } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import { rawCssPlugin } from "./.plugins/rawCss";

const COMPONENT_PATH = [
  "src/components/NAnchor/NAnchor.tsx",
  "src/components/NBadge/NBadge.tsx",
  "src/components/NBreadcrumb/NBreadcrumb.tsx",
  "src/components/NButton/NButton.tsx",
  "src/components/NCodeBlock/NCodeBlock.tsx",
  "src/components/NDivider/NDivider.tsx",
  "src/components/NError/NError.tsx",
  "src/components/NH1/NH1.tsx",
  "src/components/NH2/NH2.tsx",
  "src/components/NH3/NH3.tsx",
  "src/components/NH4/NH4.tsx",
  "src/components/NH5/NH5.tsx",
  "src/components/NH6/NH6.tsx",
  "src/components/NHeader/NHeader.tsx",
  "src/components/NInput/NInput.tsx",
  "src/components/NLi/NLi.tsx",
  "src/components/NNavAccordion/NNavAccordion.tsx",
  "src/components/NOption/NOption.tsx",
  "src/components/NPager/NPager.tsx",
  "src/components/NPagers/NPagers.tsx",
  "src/components/NSelect/NSelect.tsx",
  "src/components/NUl/NUl.tsx",
];

export default defineConfig({
  plugins: [
    rawCssPlugin(),
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
    visualizer({
      open: false,
      filename: "stats.html",
      gzipSize: true,
      template: "treemap",
    }),
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
      external: (id) => {
        // shikiを外部依存として扱う
        if (id === "shiki") {
          return true;
        }
        if (id.startsWith("@chatora/") || id.startsWith("chatora")) {
          return true;
        }
        return false;
      },
      output: {
        exports: "named",
        preserveModules: true,
        inlineDynamicImports: false,
        manualChunks: undefined,
        globals: {
          shiki: "Shiki",
        },
      },
    },
  },
});
