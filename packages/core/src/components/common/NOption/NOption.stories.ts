import type { Meta, StoryObj } from "@storybook/web-components";
import type { NOptionType } from "./NOption.ce";
import { renderElement } from "@root/.storybook/utils/renderElement";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-option",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const elm = renderElement("n-option", attr);

    return elm;
  },
};

export default meta;
type Story = StoryObj<NOptionType["Props"]>;

export const Primary: Story = {
  args: {},
};
