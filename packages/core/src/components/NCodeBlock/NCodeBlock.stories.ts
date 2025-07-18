import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NCodeBlock";

import { renderElement } from "@root/.storybook/utils/renderElement";
import { functionalCustomElement } from "chatora";

import { NCodeBlock } from "./NCodeBlock";

const meta = {
  title: "Components/NCodeBlock",
  tags: ["autodocs"],
  render: args => renderElement(
    "n-code-block",
    functionalCustomElement(NCodeBlock),
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
    code: `const helloWorld = () => {
  console.log("Hello, World!");
};`,
    lang: "javascript",
    fileName: "helloWorld.js",
  },
};

