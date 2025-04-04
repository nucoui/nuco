import { readdirSync } from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";
import { Elements } from "@nuco/core";

/** @type {(str: string) => string} */
function capitalizeAndRemovePrefix(str) {
  // "n-" を削除
  const newStr = str.replace("n-", "");

  // パスカルケースに変換
  return newStr
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

/** @type {(str: string) => string} */
function kebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

export default (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) => {
  plop.setHelper("replace", (text, search, replacement) => {
    return text.replace(new RegExp(search, "g"), replacement);
  });

  plop.setGenerator("wrapper", {
    description: "Create a Wrapper component",
    prompts: [
      {
        type: "list",
        name: "name",
        message: "What is the name of the web-component you want to wrap?",
        choices: () => {
          return new Promise((resolve) => {
            const wrappedComponentsDir = join(cwd(), "src/components/wrapped");
            const wrappedFiles = readdirSync(wrappedComponentsDir)
              .map(file => `n-${kebabCase(file.replace(/\.[^/.]+$/, ""))}`);
            const choices = Object.keys(Elements).filter(key => !wrappedFiles.includes(key));

            if (choices.length === 0) {
              throw new Error("No components to wrap");
            }

            setTimeout(() => {
              resolve(choices);
            }, 1000);
          });
        },
      },
    ],
    actions: (data) => {
      const rootPath = "../../";
      const componentDir = `${rootPath}src/components/wrapped/`;
      const viteConfigPath = `${rootPath}vite.config.ts`;

      const componentName = capitalizeAndRemovePrefix(data.name);

      return [
        {
          type: "add",
          path: `${componentDir}${componentName}.tsx`,
          templateFile: "./wrapper.tsx.hbs",
        },
        {
          type: "modify",
          path: viteConfigPath,
          /**
           * @param {string} fileContent
           */
          transform: (fileContent) => {
            const match = fileContent.match(/(const COMPONENT_PATH = \[)([\s\S]*?)(\];)/);

            if (!match) {
              throw new Error("COMPONENT_PATH not found");
            }

            const entries = match[2]
              .split(",")
              .map(entry => entry.trim().replace(/['"]/g, ""))
              .filter(entry => entry); // 空エントリを除去

            const newEntry = `src/components/wrapped/${componentName}.tsx`;

            entries.push(newEntry);
            entries.sort();

            const updatedEntries = entries.map(entry => `"${entry}"`).join(",\n  ");

            return fileContent.replace(
              /const COMPONENT_PATH = \[[\s\S]*?\];/,
              `const COMPONENT_PATH = [\n  ${updatedEntries}\n];`,
            );
          },
        },
        {
          type: "modify",
          path: `${rootPath}package.json`,
          /**
           * @param {string} fileContent - package.json の内容
           */
          transform: (fileContent) => {
            const packageJson = JSON.parse(fileContent);

            // `exports` フィールドが存在しない場合は初期化
            if (!packageJson.exports) {
              packageJson.exports = {};
            }

            const componentPath = `./components/${componentName}`;

            const newExport = {
              types: `./dist/types/components/wrapped/${componentName}.d.ts`,
              import: `./dist/packages/react/src/components/wrapped/${componentName}.js`,
              require: `./dist/packages/react/src/components/wrapped/${componentName}.cjs`,
            };

            // エクスポート文を追加
            packageJson.exports[componentPath] = newExport;

            // `exports` フィールドをアルファベット順にソート
            const sortedExports = Object.keys(packageJson.exports)
              .sort()
              .reduce((acc, key) => {
                acc[key] = packageJson.exports[key];
                return acc;
              }, {});

            packageJson.exports = sortedExports;

            // JSON を文字列に戻して返す
            return JSON.stringify(packageJson, null, 2);
          },
        },
      ];
    },
  });
};
