import fs from "node:fs";
import path from "node:path";
import { generateCssVariables } from "./generateCssVariables";

import { generateCustomData } from "./generateCustomData";
import { generatePrefersColorSchemeCssVariables } from "./generatePrefersColorSchemeCssVariables";

const mergeFiles = (inputFiles: string[], outputFile: string) => {
  const outputDir = path.dirname(outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const mergedContent = inputFiles.map((filePath) => {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf-8");
    }
    else {
      console.warn(`File not found: ${filePath}`);
      return "";
    }
  }).join("\n");

  fs.writeFileSync(outputFile, mergedContent);
};

const genCssVariables = () => {
  const permissibleColorValues = generateCssVariables("src/permissibleColor.ts", "permissibleColor");
  const semanticColorValues = generateCssVariables("src/semanticColor.ts", "semanticColor");
  const numericValues = generateCssVariables("src/numeric.ts", "numeric");

  const outputDir = path.resolve(__dirname, "../../dist/css");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(outputDir, `permissibleColor.css`),
    `:root {\n${permissibleColorValues.map(({ key, value }) => `  ${key}: ${value};\n`).join("")}}\n`,
  );
  fs.writeFileSync(
    path.join(outputDir, `semanticColor.css`),
    `:root {\n${semanticColorValues.map(({ key, value }) => `  ${key}: ${value};\n`).join("")}}\n`,
  );
  fs.writeFileSync(
    path.join(outputDir, `numeric.css`),
    `:root {\n${numericValues.map(({ key, value }) => `  ${key}: ${value};\n`).join("")}}\n`,
  );
  fs.writeFileSync(
    path.join(outputDir, "index.js"),
    `import "./variables.css";`,
  );
  fs.writeFileSync(
    path.join(outputDir, "index.d.ts"),
    `export * from "./variables.css";`,
  );

  generatePrefersColorSchemeCssVariables(semanticColorValues);
  generateCustomData([...permissibleColorValues, ...semanticColorValues, ...numericValues]);

  mergeFiles([
    path.join(outputDir, `permissibleColor.css`),
    path.join(outputDir, `semanticColor.css`),
    path.join(outputDir, `numeric.css`),
    path.join(outputDir, `prefersColorSchema.css`),
  ], path.join(outputDir, "variables.css"));
};

export { genCssVariables };
