import type { Meta, StoryObj } from "@storybook/web-components";
import { renderElement } from "@root/.storybook/utils/renderElement";
import { NCodeBlock, type NCodeBlockType } from "./NCodeBlock.ce";

// This default export determines where your story goes in the story list
const meta: Meta<NCodeBlockType["Props"]> = {
  component: "n-code-block",
  tags: ["autodocs"],
  argTypes: {
    lang: {
      control: "select",
      options: ["html", "css", "js", "ts", "json", "sh"] as NCodeBlockType["Props"]["lang"][],
    },

    code: {
      control: "text",
    },
  },
  args: {
    lang: "js",
    fileName: "index.js",
    code: `console.log("Hello, World!");`,
  },
  render: (attr) => {
    const elm = renderElement("n-code-block", NCodeBlock, attr);

    return elm;
  },
};

export default meta;
type Story = StoryObj<NCodeBlockType["Props"]>;

export const Primary: Story = {
  args: {},
};
