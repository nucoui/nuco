import type { Meta, StoryObj } from "@storybook/web-components";
import { renderElement } from "@root/.storybook/utils/renderElement";
import { NLi, type NLiType } from "./NLi.ce";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-li",
  tags: ["autodocs"],
  argTypes: {
    marker: {
      control: "select",
      options: [
        "disc",
        "decimal",
        "none",
      ],
    },
  },
  args: {
    marker: "none",
  },
  render: (attr) => {
    const element = renderElement("n-li", NLi, attr);
    element.appendChild(document.createTextNode("List item"));

    return element;
  },
};

export default meta;
type Story = StoryObj<NLiType["Props"]>;

export const Primary: Story = {
  args: {},
};
