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
        message: "\x1B[92m{{ name }}\x1B[39m What is component name ?\n※ Please start with `Nuko`\n\x1B[92m>>\x1B[39m",
        validate: (value) => {
          if (!value)
            return "name is required";

          if (!value.startsWith("Nuko"))
            return "name must start with `Nuko`";

          return true;
        },
      },
    ],
    actions: (data) => {
      const path = `../../src/components${data.atomic}`;
      const actions = [
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
      ];

      return actions;
    },
  });
};
