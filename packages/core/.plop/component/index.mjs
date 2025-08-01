const toPascalCase = (str) => {
  return str
    .replace(/(?:^|-)([a-z])/g, (_, char) => char.toUpperCase());
};

export default (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "atomic",
        message: "\x1B[92m{{ atomic }}\x1B[39m Where is the component located ?\n※ Path is `src/components{{ atomic }}`\n※ Path must start with `/` and end with `/`\n\x1B[92m>>\x1B[39m",
        /** @type {(value: string) => boolean | string} */
        validate: (value) => {
          if (!value.startsWith("/"))
            return "path must start with `/`";

          if (!value.endsWith("/"))
            return "path must end with `/`";

          return true;
        },
      },
      {
        type: "input",
        name: "name",
        message: "\x1B[92m{{ name }}\x1B[39m What is component name ?\n※ Please start with `n-`\n※ The next letter after `n-' must be a Pascal case. Example: `n-hoge` is incorrect. `n-hoge` is correct.\n\x1B[92m>>\x1B[39m",
        validate: (value) => {
          if (!value)
            return "name is required";

          if (value.length < 2)
            return "name must be at least 2 characters long";

          if (!value.startsWith("n-"))
            return "name must start with `n-`";

          const kebabPattern = /^n-[a-z0-9]+(?:-[a-z0-9]+)*$/;
          if (!kebabPattern.test(value))
            return "name must be Kebab case";

          return true;
        },
      },
    ],
    actions: (data) => {
      const rootPath = "../../";
      const componentDir = `src/components${data.atomic}{{pascalCase name}}/`;
      // const mainPath = `${rootPath}src/main.ts`;
      const elementsPath = `${rootPath}src/elements/elements.ts`;
      const customElementsPath = `${rootPath}src/elements/customElements.ts`;
      const declarativeCustomElementsPath = `${rootPath}src/elements/declarativeCustomElements.ts`;
      const viteConfigPath = `${rootPath}vite.config.ts`;

      return [
        {
          type: "add",
          path: `${rootPath}${componentDir}{{pascalCase name}}.tsx`,
          templateFile: "./component.tsx.hbs",
        },
        {
          type: "add",
          path: `${rootPath}${componentDir}{{pascalCase name}}.scss`,
          templateFile: "./component.scss.hbs",
        },
        {
          type: "add",
          path: `${rootPath}${componentDir}{{pascalCase name}}.stories.ts`,
          templateFile: "./component.stories.ts.hbs",
        },
        {
          type: "modify",
          path: elementsPath,
          pattern: /(const Elements = \{)/g,
          template: `$1\n  "{{kebabCase name}}": {{pascalCase name}},`,
        },
        {
          type: "modify",
          path: elementsPath,
          pattern: /(^\s*)/m, // ファイルの先頭にマッチする正規表現
          template: `$1import { {{pascalCase name}} } from "@/components{{atomic}}{{pascalCase name}}/{{pascalCase name}}";\n`,
        },
        {
          type: "modify",
          path: customElementsPath,
          pattern: /(const CustomElements = \{)/g,
          template: `$1\n  "{{kebabCase name}}": functionalCustomElement({{pascalCase name}}),`,
        },
        {
          type: "modify",
          path: customElementsPath,
          pattern: /(^\s*)/m, // ファイルの先頭にマッチする正規表現
          template: `$1import { {{pascalCase name}} } from "@/components{{atomic}}{{pascalCase name}}/{{pascalCase name}}";\n`,
        },
        {
          type: "modify",
          path: declarativeCustomElementsPath,
          pattern: /(const DeclarativeCustomElements = \{)/g,
          template: `$1\n  "{{kebabCase name}}": (props: ComponentProps<typeof {{pascalCase name}}>) => functionalDeclarativeCustomElement({{pascalCase name}}, { props }),`,
        },
        {
          type: "modify",
          path: declarativeCustomElementsPath,
          pattern: /(^\s*)/m, // ファイルの先頭にマッチする正規表現
          template: `$1import { {{pascalCase name}} } from "@/components{{atomic}}{{pascalCase name}}/{{pascalCase name}}";\n`,
        },
        {
          type: "modify",
          path: viteConfigPath,
          /**
           * @param {string} fileContent
           * @param {{ atomic: string, name: string }} data
           */
          transform: (fileContent, data) => {
            const match = fileContent.match(/(const COMPONENT_PATH = \[)([\s\S]*?)(\];)/);

            if (!match) {
              throw new Error("COMPONENT_PATH not found");
            }

            const entries = match[2]
              .split(",")
              .map(entry => entry.trim().replace(/['"]/g, ""))
              .filter(entry => entry); // 空エントリを除去

            const componentDir = `src/components${data.atomic}${toPascalCase(data.name)}/`;
            const newEntry = `${componentDir}${toPascalCase(data.name)}.tsx`;

            entries.push(newEntry);
            entries.sort();

            const updatedEntries = entries.map(entry => `"${entry}"`).join(",\n  ");

            return fileContent.replace(
              /const COMPONENT_PATH = \[[\s\S]*?\];/,
              `const COMPONENT_PATH = [\n  ${updatedEntries},\n];`,
            );
          },
        },
        {
          type: "modify",
          path: `${rootPath}package.json`,
          /**
           * @param {string} fileContent - package.json の内容
           * @param {{ atomic: string, name: string }} data - プロンプトで入力された情報
           */
          transform: (fileContent, data) => {
            const packageJson = JSON.parse(fileContent);

            // `exports` フィールドが存在しない場合は初期化
            if (!packageJson.exports) {
              packageJson.exports = {};
            }

            // 新しいエクスポート文を作成
            const componentName = `n-${data.name.replace(/^n-/, "").toLowerCase()}`;
            const componentPath = `./components/${componentName}`;
            const pascalCaseName = toPascalCase(data.name);

            const newExport = {
              types: `./dist/types/src/components${data.atomic}${pascalCaseName}/${pascalCaseName}.d.ts`,
              import: `./dist/packages/chatora/src/components${data.atomic}${pascalCaseName}/${pascalCaseName}.js`,
              require: `./dist/packages/chatora/src/components${data.atomic}${pascalCaseName}/${pascalCaseName}.cjs`,
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
