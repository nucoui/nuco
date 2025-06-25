import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NH1";

import { renderElement } from "@root/.storybook/utils/renderElement";
import { functionalCustomElement } from "chatora";

import { NH1 } from "./NH1";

const meta = {
  title: "Components/NH1~6/NH1",
  tags: ["autodocs"],
  render: args => renderElement("n-h1", functionalCustomElement(NH1), args.slot, args),
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
