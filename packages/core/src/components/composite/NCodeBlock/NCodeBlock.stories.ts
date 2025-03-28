import type { Meta, StoryObj } from "@storybook/web-components";
import type { NCodeBlockType } from "./NCodeBlock.ce";
import { renderElement } from "@root/.storybook/utils/renderElement";

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
    code: `console.log("Hello, World!");`,
  },
  render: (attr) => {
    const elm = renderElement("n-code-block", attr);

    return elm;
  },
};

export default meta;
type Story = StoryObj<NCodeBlockType["Props"]>;

export const Primary: Story = {
  args: {},
};
