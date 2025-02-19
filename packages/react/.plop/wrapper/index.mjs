import { Elements } from "@nuco/core";

/** @type {(str: string) => string} */
function capitalizeAndRemovePrefix(str) {
  // "n-" を削除
  const newStr = str.replace("n-", "");

  // 最初の文字を大文字にする
  return newStr.charAt(0).toUpperCase() + newStr.slice(1);
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
            setTimeout(() => {
              resolve(Object.keys(Elements));
            }, 1000);
          });
        },
      },
    ],
    actions: (data) => {
      const path = `../../src/components/wrapped/`;
      const mainPath = "../../src/main.tsx";

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
