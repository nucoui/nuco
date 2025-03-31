import type { Meta, StoryObj } from "@storybook/web-components";
import { renderElement } from "@root/.storybook/utils/renderElement";
import { NAnchor, type NAnchorType } from "./NAnchor.ce";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-anchor",
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: "text",
    },
    target: {
      control: "select",
      options: ["_self", "_blank", "_parent", "_top", "_unfencedTop"],
    },
    underline: {
      control: "select",
      options: ["none", "solid", "dotted", "dashed"],
    },
  },
  args: {
    href: "#",
    target: "_self",
    underline: "dotted",
  },
  render: (attr) => {
    const elm = renderElement("n-anchor", NAnchor, attr);

    const text = document.createElement("span");
    text.textContent = "Anchor";

    elm.appendChild(text);

    return elm;
  },
};

export default meta;
type Story = StoryObj<NAnchorType["Props"]>;

export const Primary: Story = {
  args: {},
};
