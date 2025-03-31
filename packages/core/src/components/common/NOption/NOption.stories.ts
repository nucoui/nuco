import type { Meta, StoryObj } from "@storybook/web-components";
import { renderElement } from "@root/.storybook/utils/renderElement";
import { NOption, type NOptionType } from "./NOption.ce";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-option",
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    disabled: false,
  },
  render: (attr) => {
    const elm = renderElement("n-option", NOption, attr);
    elm.textContent = "Option";

    return elm;
  },
};

export default meta;
type Story = StoryObj<NOptionType["Props"]>;

export const Primary: Story = {
  args: {},
};
