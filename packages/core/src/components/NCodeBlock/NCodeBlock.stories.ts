import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NCodeBlock";

import { renderElement } from "@root/.storybook/utils/renderElement";
import { genSDNCodeBlock } from "./NCodeBlock";

const meta = {
  title: "Components/NCodeBlock",
  tags: ["autodocs"],
  render: args => renderElement(
    "n-code-block",
    genSDNCodeBlock(),
    args.slot,
    args,
  ),
  argTypes: {
    code: {
      control: { type: "text" },
      description: "Code content to be displayed",
    },
    lang: {
      control: { type: "select" },
      options: ["javascript", "typescript", "html", "css", "json", "python", "java", "csharp", "php", "ruby", "go", "bash", "shell", "sql", "kotlin", "swift", "rust", "dart", "scala", "perl", "lua", "haskell", "elixir", "clojure", "groovy", "r", "matlab", "julia", "objective-c", "assembly", "fortran", "c", "cpp", "pascal", "vb", "delphi", "fsharp", "powershell", "typescriptreact", "javascriptreact", "vue", "angular", "react", "svelte", "lit", "markdown", "plaintext"],
      description: "Programming language for syntax highlighting",
    },
    fileName: {
      control: { type: "text" },
      description: "File name of the code",
    },
    slot: {
      control: { type: "text" },
      description: "<slot> content",
      table: {
        category: "<slot>",
      },
    },
  },
  args: {
    slot: "slot",
  },
} satisfies Meta<Props & { slot?: string }>;

export default meta;
type Story = StoryObj<Props & { slot?: string }>;

export const Primary: Story = {
  args: {
    code: "const helloWorld = () => {\n  console.log(\"Hello, World!aaaaaasdasdasdasdasdasdasdafdgadfghkalsdfkp[ekapsodkfkoesakdolfk;lasdkfl;klsdklf;k;laskdlf;klaskd;fklsak;fkl;askdfl;aksdfk\");\n};",
    lang: "javascript",
    fileName: "helloWorld.js",
  },
};
