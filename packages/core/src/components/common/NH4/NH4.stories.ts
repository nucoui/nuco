import type { Meta, StoryObj } from "@storybook/web-components";
import { renderElement } from "@root/.storybook/utils/renderElement";
import { NH4, type NH4Type } from "./NH4.ce";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-h4",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const element = renderElement("n-h4", NH4, attr);
    element.innerHTML = "Heading 4";

    return element;
  },
};

export default meta;
type Story = StoryObj<NH4Type["Props"]>;

export const Primary: Story = {
  args: {},
};
