import type { CssVariablesValue } from "./generateCssVariables";
import fs from "node:fs";
import path from "node:path";

type prefersColorSchemeCssVariablesValue = Array<{
  key: string;
  dark: string;
  light: string;
}>;

export const generatePrefersColorSchemeCssVariables = (cssVariables: CssVariablesValue) => {
  const prefersColorSchemeCssVariables = Array.from(new Set(cssVariables.map(({ key }) => key.replace(/--s-(light|dark)-/, ""))));

  const mappedPrefersColorSchemeCssVariables: prefersColorSchemeCssVariablesValue = prefersColorSchemeCssVariables.map((key) => {
    return {
      key: `--cs-${key}`,
      dark: `var(--s-dark-${key})`,
      light: `var(--s-light-${key})`,
    };
  });

  const mappedNeutralCssVariables: prefersColorSchemeCssVariablesValue = [
    {
      key: "--cs-neutral-100",
      dark: "var(--p-neutral-900)",
      light: "var(--p-neutral-100)",
    },
    {
      key: "--cs-neutral-200",
      dark: "var(--p-neutral-800)",
      light: "var(--p-neutral-200)",
    },
    {
      key: "--cs-neutral-300",
      dark: "var(--p-neutral-700)",
      light: "var(--p-neutral-300)",
    },
    {
      key: "--cs-neutral-400",
      dark: "var(--p-neutral-600)",
      light: "var(--p-neutral-400)",
    },
    {
      key: "--cs-neutral-500",
      dark: "var(--p-neutral-500)",
      light: "var(--p-neutral-500)",
    },
    {
      key: "--cs-neutral-600",
      dark: "var(--p-neutral-400)",
      light: "var(--p-neutral-600)",
    },
    {
      key: "--cs-neutral-700",
      dark: "var(--p-neutral-300)",
      light: "var(--p-neutral-700)",
    },
    {
      key: "--cs-neutral-800",
      dark: "var(--p-neutral-200)",
      light: "var(--p-neutral-800)",
    },
    {
      key: "--cs-neutral-900",
      dark: "var(--p-neutral-100)",
      light: "var(--p-neutral-900)",
    },
  ];

  const values = [...mappedPrefersColorSchemeCssVariables, ...mappedNeutralCssVariables];

  const outputDir = path.resolve(__dirname, "../../dist/css");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const permissibleColorCssVariablesText = `:root {\n${values.map(({ key, light }) => `  ${key}: ${light};\n`).join("")}}\n[data-color-scheme="dark"] {\n${values.map(({ key, dark }) => `  ${key}: ${dark};\n`).join("")}}\n@media (prefers-color-scheme: dark) {\n  :root {\n${values.map(({ key, dark }) => `    ${key}: ${dark};\n`).join("")}  }\n  [data-color-scheme="light"] {\n${values.map(({ key, light }) => `    ${key}: ${light};\n`).join("")}  }\n}\n`;

  fs.writeFileSync(
    path.join(outputDir, "prefersColorSchema.css"),
    permissibleColorCssVariablesText,
  );
};
