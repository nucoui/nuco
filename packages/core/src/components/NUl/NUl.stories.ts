import type { Meta, StoryObj } from "@storybook/web-components";
import type { NUlProps } from "./NUl.ce";
import { renderElement } from "@root/.storybook/utils/renderElement";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-ul",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    return renderElement("n-ul", attr);
  },
};

export default meta;
type Story = StoryObj<NUlProps>;

export const Primary: Story = {
  args: {},
};
