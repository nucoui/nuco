import type { Meta, StoryObj } from "@storybook/web-components";
import { renderElement } from "@root/.storybook/utils/renderElement";
import { NH3, type NH3Type } from "./NH3.ce";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-h3",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const element = renderElement("n-h3", NH3, attr);
    element.innerHTML = "Heading 3";

    return element;
  },
};

export default meta;
type Story = StoryObj<NH3Type["Props"]>;

export const Primary: Story = {
  args: {},
};
