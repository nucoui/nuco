import type { Meta, StoryObj } from "@storybook/web-components";
import type { NH5Type } from "./NH5.ce";
import { renderElement } from "@root/.storybook/utils/renderElement";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-h5",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const element = renderElement("n-h5", attr);
    element.innerHTML = "Heading 5";

    return element;
  },
};

export default meta;
type Story = StoryObj<NH5Type["Props"]>;

export const Primary: Story = {
  args: {},
};
