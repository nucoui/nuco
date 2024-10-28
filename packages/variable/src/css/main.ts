import fs from "node:fs";
import path from "node:path";
import { generateCssVariables } from "./generateCssVariables";
import { generateCustomData } from "./generateCustomData";

const genCssVariables = () => {
  const permissibleColorValues = generateCssVariables("src/permissibleColor.ts", "permissibleColor");
  const semanticColorValues = generateCssVariables("src/semanticColor.ts", "semanticColor");

  const outputDir = path.resolve(__dirname, "../../dist/css");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outputDir, `variables.css`), `:root {\n${[...permissibleColorValues, ...semanticColorValues].map(({ key, value }) => `  ${key}: ${value};\n`).join("")}}\n`);
  fs.writeFileSync(path.join(outputDir, "index.js"), `import "./variables.css";`);
  fs.writeFileSync(path.join(outputDir, "index.d.ts"), `export * from "./variables.css";`);

  generateCustomData();
};

genCssVariables();

export { genCssVariables };
