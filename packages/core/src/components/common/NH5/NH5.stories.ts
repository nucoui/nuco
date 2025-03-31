import type { Meta, StoryObj } from "@storybook/web-components";
import { renderElement } from "@root/.storybook/utils/renderElement";
import { NH5, type NH5Type } from "./NH5.ce";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-h5",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const element = renderElement("n-h5", NH5, attr);
    element.innerHTML = "Heading 5";

    return element;
  },
};

export default meta;
type Story = StoryObj<NH5Type["Props"]>;

export const Primary: Story = {
  args: {},
};
