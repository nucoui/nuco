import type { Meta, StoryObj } from "@storybook/web-components";
import type { NUlType } from "./NUl.ce";
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

    const nLi1 = renderElement("n-li", {});
    nLi1.appendChild(document.createTextNode("List item"));
    element.appendChild(nLi1);

    const nLi2 = renderElement("n-li", {});
    nLi2.appendChild(document.createTextNode("List item"));
    element.appendChild(nLi2);

    return element;
  },
};

export default meta;
type Story = StoryObj<NUlType["Props"]>;

export const Primary: Story = {
  args: {},
};
