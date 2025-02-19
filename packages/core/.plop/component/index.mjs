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
      const path = `../../src/components${data.atomic}`;
      const mainPath = "../../src/main.ts";
      const resisterPath = "../../src/utils/resister.ts";

      return [
        {
          type: "add",
          path: `${path}{{pascalCase name}}/{{pascalCase name}}.ce.vue`,
          templateFile: "./component.ce.vue.hbs",
        },
        {
          type: "add",
          path: `${path}{{pascalCase name}}/{{pascalCase name}}.ce.ts`,
          templateFile: "./component.ce.ts.hbs",
        },
        {
          type: "add",
          path: `${path}{{pascalCase name}}/{{pascalCase name}}.stories.ts`,
          templateFile: "./component.stories.ts.hbs",
        },
        {
          type: "modify",
          path: resisterPath,
          pattern: /(const Elements = \{)/g,
          template: `$1\n  "{{kebabCase name}}": {{pascalCase name}},`,
        },
        {
          type: "modify",
          path: resisterPath,
          pattern: /(^\s*)/m, // ファイルの先頭にマッチする正規表現
          template: `$1\n\nimport { {{pascalCase name}} } from "@/components{{atomic}}{{pascalCase name}}/{{pascalCase name}}.ce";`,
        },
        {
          type: "modify",
          path: mainPath,
          pattern: /(^\s*)/m, // ファイルの先頭にマッチする正規表現
          template: `$1\n\nexport * from "@/components{{atomic}}{{pascalCase name}}/{{pascalCase name}}.ce";`,
        },
      ];
    },
  });
};
