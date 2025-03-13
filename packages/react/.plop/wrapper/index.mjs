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
      const path = `../../src/components/wrapped/`;
      const mainPath = "../../src/main.ts";

      const componentName = capitalizeAndRemovePrefix(data.name);

      return [
        {
          type: "add",
          path: `${path}${componentName}.tsx`,
          templateFile: "./wrapper.tsx.hbs",
        },
        {
          type: "modify",
          path: mainPath,
          pattern: /(^\s*)/m, // ファイルの先頭にマッチする正規表現
          template: `$1export { ${componentName} } from "@/components/wrapped/${componentName}";\n`,
        },
      ];
    },
  });
};
