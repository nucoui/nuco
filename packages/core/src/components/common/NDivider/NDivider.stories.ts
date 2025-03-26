import type { Meta, StoryObj } from "@storybook/web-components";
import type { NDividerType } from "./NDivider.ce";
import { renderElement } from "@root/.storybook/utils/renderElement";

// This default export determines where your story goes in the story list
const meta: Meta<NDividerType["Props"]> = {
  component: "n-divider",
  tags: ["autodocs"],
  argTypes: {
    textPosition: {
      control: "select",
      options: ["start", "center", "end"],
    },
    text: {
      control: "text",
    },
  },
  args: {},
  render: (attr) => {
    const elm = renderElement("n-divider", attr);

    return elm;
  },
};

export default meta;
type Story = StoryObj<NDividerType["Props"]>;

export const Primary: Story = {
  args: {},
};

export const TextPosition: Story = {
  args: {
    textPosition: "center",
    text: "Text",
  },
};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
  render: (attr) => {
    const container = document.createElement("div");
    container.style.height = "200px";

    const elm = renderElement("n-divider", attr);

    const text = document.createElement("span");
    text.textContent = "Text";

    elm.appendChild(text);
    container.appendChild(elm);

    return container;
  },
};
