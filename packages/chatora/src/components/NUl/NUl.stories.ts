import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NUl";

import { renderElement } from "@root/.storybook/utils/renderElement";
import { functionalCustomElement } from "chatora";

import { NUl } from "./NUl";

const meta = {
  title: "Components/NList/NUl",
  tags: ["autodocs"],
  render: args => renderElement("n-ul", functionalCustomElement(NUl), args.slot, args),
  argTypes: {
    slot: {
      control: { type: "text" },
      description: "<slot> content",
      table: {
        category: "<slot>",
      },
    },
  },
  args: {
    slot: "List Content",
  },
} satisfies Meta<Props & { slot?: string }>;

export default meta;
type Story = StoryObj<Props & { slot?: string }>;

export const Primary: Story = {
  args: {},
};
