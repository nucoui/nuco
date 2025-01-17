import type { Meta, StoryObj } from "@storybook/web-components";
import { renderElement } from "@root/.storybook/utils/renderElement";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-h6",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const element = renderElement("n-h6", attr);
    element.innerHTML = "Heading 6";

    return element;
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {},
};
