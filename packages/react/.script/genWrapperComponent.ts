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
import type { N${pascalComponentName} } from "@nuco/core/components/N${pascalComponentName}";
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
 * Extracts component tag names from @nuco/core vite.config.ts COMPONENT_PATH
 * @returns Array of component tag names
 */
const extractComponentsFromChatora = (): string[] => {
  const chatoraViteConfigPath = join(__dirname, "../../chatora/vite.config.ts");

  if (!existsSync(chatoraViteConfigPath)) {
    throw new Error(`@nuco/core vite.config.ts not found at ${chatoraViteConfigPath}`);
  }

  const viteConfig = readFileSync(chatoraViteConfigPath, "utf-8");
  const componentPathMatch = viteConfig.match(/const COMPONENT_PATH = \[([\s\S]*?)\];/);

  if (!componentPathMatch) {
    throw new Error("COMPONENT_PATH not found in vite.config.ts");
  }

  const componentPaths: string[] = [];

  // Extract individual component paths from the COMPONENT_PATH array
  const pathsString = componentPathMatch[1];
  const paths = pathsString
    .split(",")
    .map(path => path.trim().replace(/['"]/g, ""))
    .filter(path => path);

  for (const path of paths) {
    // Extract component name from path like "src/components/NBadge/NBadge.tsx"
    const match = path.match(/src\/components\/N(.+?)\/N\1\.tsx$/);
    if (match) {
      const componentName = match[1];
      // Convert PascalCase to kebab-case and add 'n-' prefix
      const tagName = `n-${componentName.replace(/([A-Z])/g, (_, letter) =>
        componentName.indexOf(letter) === 0 ? letter.toLowerCase() : `-${letter.toLowerCase()}`)}`;
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
