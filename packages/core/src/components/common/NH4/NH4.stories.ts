import type { Meta, StoryObj } from "@storybook/web-components";
import type { NH4Type } from "./NH4.ce";
import { renderElement } from "@root/.storybook/utils/renderElement";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-h4",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const element = renderElement("n-h4", attr);
    element.innerHTML = "Heading 4";

    return element;
  },
};

export default meta;
type Story = StoryObj<NH4Type["Props"]>;

export const Primary: Story = {
  args: {},
};
