import type { Meta, StoryObj } from "@storybook/web-components";
import { renderElement } from "@root/.storybook/utils/renderElement";
import { NPager, type NPagerType } from "./NPager.ce";

// This default export determines where your story goes in the story list
const meta: Meta<NPagerType["Props"]> = {
  component: "n-pager",
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["prev", "next"],
    },
  },
  args: {},
  render: (attr) => {
    const elm = renderElement("n-pager", NPager, attr);

    return elm;
  },
};

export default meta;
type Story = StoryObj<NPagerType["Props"]>;

export const Primary: Story = {
  args: {},
};
