import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NH4";

import { renderElement } from "@root/.storybook/utils/renderElement";
import { functionalCustomElement } from "chatora";

import { NH4 } from "./NH4";

const meta = {
  title: "Components/NH1~6/NH4",
  tags: ["autodocs"],
  render: args => renderElement("n-h4", functionalCustomElement(NH4), args.slot, args),
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
    slot: "Heading Text",
  },
} satisfies Meta<Props & { slot?: string }>;

export default meta;
type Story = StoryObj<Props & { slot?: string }>;

export const Primary: Story = {
  args: {},
};
