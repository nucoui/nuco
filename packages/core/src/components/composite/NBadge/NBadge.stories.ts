import type { Meta, StoryObj } from "@storybook/web-components";
import { NH1 } from "@/main";
import { renderElement } from "@root/.storybook/utils/renderElement";
import { NBadge, type NBadgeType } from "./NBadge.ce";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-badge",
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "success", "warning", "error"],
    },
    text: {
      control: "text",
    },
  },
  args: {},
  render: (attr) => {
    const elm = renderElement("n-badge", NBadge, attr);

    return elm;
  },
};

export default meta;
type Story = StoryObj<NBadgeType["Props"]>;

export const Primary: Story = {
  args: {
    type: "primary",
    text: "Primary",
  },
};

export const Playground: Story = {
  args: {
    type: "primary",
    text: "1.0.0 +",
  },
  render: (attr) => {
    const elm = renderElement("n-badge", NBadge, attr);

    const h1 = renderElement("n-h1", NH1, {});
    h1.innerHTML = "Heading 1";
    h1.appendChild(elm);

    return h1;
  },
};
