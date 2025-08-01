import type { Plugin } from "vite";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import process from "node:process";
import { compileString } from "sass-embedded";

/**
 * Vite plugin to process SCSS files with ?raw query parameter.
 * Returns the compiled CSS as a string instead of raw SCSS content.
 */
export function rawCssPlugin(): Plugin {
  return {
    name: "raw-css",
    enforce: "pre", // Ensure this plugin runs before other CSS processors
    resolveId(id, importer) {
      // Handle ?raw query parameter for SCSS/SASS files
      if (id.includes("?raw") && id.match(/\.(scss|sass)\?raw$/)) {
        const filePath = id.split("?")[0];

        // Resolve relative path if importer is available
        if (importer && filePath.startsWith("./")) {
          const resolvedPath = resolve(dirname(importer), filePath);
          return `${resolvedPath}.virtual-rawcss`;
        }

        return `${filePath}.virtual-rawcss`;
      }
      return null;
    },
    load(id) {
      // Check if the file has .virtual-rawcss extension
      if (!id.endsWith(".virtual-rawcss")) {
        return null;
      }

      // Extract the actual file path by removing the virtual extension
      const filePath = id.replace(".virtual-rawcss", "");

      // Check if it's a SCSS/SASS file
      if (!filePath.match(/\.(scss|sass)$/)) {
        return null;
      }

      try {
        // Read the SCSS file content
        const scssContent = readFileSync(filePath, "utf-8");

        // Compile SCSS to CSS using sass-embedded
        const result = compileString(scssContent, {
          loadPaths: [process.cwd(), dirname(filePath)],
          style: "expanded", // Use expanded style for better readability
        });

        // Return the compiled CSS as a string export
        return `export default ${JSON.stringify(result.css)};`;
      }
      catch (error) {
        // If compilation fails, throw an error with details
        this.error(`Failed to compile SCSS file ${filePath}: ${error}`);
      }
    },
  };
}

