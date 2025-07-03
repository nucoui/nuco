import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Generates a React wrapper component file content for a given tag name
 * @param tagName - The tag name in the format "n-{component-name}"
 * @returns The generated TypeScript React component file content
 */
const genComponentFile = (tagName: `n-${string}`) => {
  const componentName = tagName.replace("n-", "").replace(/-([a-z])/g, g => g[1].toUpperCase());
  const pascalComponentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

  return `"use client";

import type { toReactEmits } from "@chatora/react";
import type { N${pascalComponentName} } from "@nuco/chatora/components/${tagName}";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const ${pascalComponentName} = (props: PropsWithChildren<ComponentProps<typeof N${pascalComponentName}> & toReactEmits<ComponentEmits<typeof N${pascalComponentName}>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "${tagName}",
    children,
    props: rest,
  });
};
`;
};

/**
 * Extracts component tag names from @nuco/chatora package.json exports
 * @returns Array of component tag names
 */
const extractComponentsFromChatora = (): string[] => {
  const chatoraPackageJsonPath = join(__dirname, "../../chatora/package.json");

  if (!existsSync(chatoraPackageJsonPath)) {
    throw new Error(`@nuco/chatora package.json not found at ${chatoraPackageJsonPath}`);
  }

  const packageJson = JSON.parse(readFileSync(chatoraPackageJsonPath, "utf-8"));
  const exports = packageJson.exports;

  const componentPaths: string[] = [];

  for (const [key] of Object.entries(exports)) {
    if (key.startsWith("./components/n-")) {
      const tagName = key.replace("./components/", "");
      componentPaths.push(tagName);
    }
  }

  return componentPaths;
};

/**
 * Extracts existing component paths from @nuco/react vite.config.ts
 * @returns Array of existing component file paths
 */
const extractExistingComponents = (): string[] => {
  const viteConfigPath = join(__dirname, "../vite.config.ts");

  if (!existsSync(viteConfigPath)) {
    throw new Error(`vite.config.ts not found at ${viteConfigPath}`);
  }

  const viteConfig = readFileSync(viteConfigPath, "utf-8");

  // Extract COMPONENT_PATH array contents
  const componentPathMatch = viteConfig.match(/const COMPONENT_PATH = \[([\s\S]*?)\];/);

  if (!componentPathMatch) {
    return [];
  }

  const componentPathContent = componentPathMatch[1];
  const paths = componentPathContent
    .split(",")
    .map(line => line.trim())
    .filter(line => line.startsWith("\"") && line.endsWith("\""))
    .map(line => line.slice(1, -1)); // Remove quotes

  return paths;
};

/**
 * Updates the COMPONENT_PATH array in vite.config.ts
 * @param newPaths - Array of component paths to add
 */
const updateViteConfig = (newPaths: string[]): void => {
  const viteConfigPath = join(__dirname, "../vite.config.ts");
  let viteConfig = readFileSync(viteConfigPath, "utf-8");

  const existingPaths = extractExistingComponents();
  const allPaths = [...existingPaths, ...newPaths];

  const componentPathArray = allPaths
    .map(path => `  "${path}"`)
    .join(",\n");

  const newComponentPath = `const COMPONENT_PATH = [
${componentPathArray},
];`;

  viteConfig = viteConfig.replace(
    /const COMPONENT_PATH = \[[\s\S]*?\];/,
    newComponentPath,
  );

  writeFileSync(viteConfigPath, viteConfig, "utf-8");
};

/**
 * Generates React wrapper components for missing chatora components
 */
const genWrapperComponent = (): void => {
  try {
    const chatoraComponents = extractComponentsFromChatora();
    const existingComponents = extractExistingComponents();

    // Extract component names from existing paths
    const existingComponentNames = existingComponents.map((path) => {
      const filename = path.split("/").pop();
      return filename?.replace(".tsx", "") || "";
    });

    const newComponentPaths: string[] = [];

    for (const tagName of chatoraComponents) {
      const componentName = tagName.replace("n-", "").replace(/-([a-z])/g, g => g[1].toUpperCase());
      const pascalComponentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

      if (!existingComponentNames.includes(pascalComponentName)) {
        const componentPath = `src/components/${pascalComponentName}.tsx`;
        const fullPath = join(__dirname, "..", componentPath);

        // Generate component file
        const componentContent = genComponentFile(tagName as `n-${string}`);
        writeFileSync(fullPath, componentContent, "utf-8");

        newComponentPaths.push(componentPath);
        // eslint-disable-next-line no-console
        console.log(`Generated: ${componentPath}`);
      }
    }

    if (newComponentPaths.length > 0) {
      // Update vite.config.ts
      updateViteConfig(newComponentPaths);
      // eslint-disable-next-line no-console
      console.log(`Updated vite.config.ts with ${newComponentPaths.length} new components`);
    }
    else {
      // eslint-disable-next-line no-console
      console.log("No new components to generate");
    }
  }
  catch (error) {
    console.error("Error generating wrapper components:", error);
    process.exit(1);
  }
};

genWrapperComponent();
