import type { Meta, StoryObj } from "@storybook/web-components";
import type { NLiType } from "./NLi.ce";
import { renderElement } from "@root/.storybook/utils/renderElement";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-li",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const element = renderElement("n-li", attr);
    element.appendChild(document.createTextNode("List item"));

    return element;
  },
};

export default meta;
type Story = StoryObj<NLiType["Props"]>;

export const Primary: Story = {
  args: {},
};
