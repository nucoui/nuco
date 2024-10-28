import { defineConfig } from "tsup";
import { genCssVariables } from "./src/css/main";

export default defineConfig({
  entry: ["src/main.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  onSuccess: async () => {
    genCssVariables();
  },
});
