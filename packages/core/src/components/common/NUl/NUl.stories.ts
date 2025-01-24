import type { Meta, StoryObj } from "@storybook/web-components";
import type { NUlProps } from "./NUl.ce";
import { renderElement } from "@root/.storybook/utils/renderElement";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-ul",
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: [
        "disc",
        "decimal",
        "none",
      ],
    },
  },
  args: {},
  render: (attr) => {
    const element = renderElement("n-ul", attr);
    const nLi = renderElement("n-li", {});
    nLi.appendChild(document.createTextNode("List item"));
    element.appendChild(nLi);

    return element;
  },
};

export default meta;
type Story = StoryObj<NUlProps>;

export const Primary: Story = {
  args: {},
};
