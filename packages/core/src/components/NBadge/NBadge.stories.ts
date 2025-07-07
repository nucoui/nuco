import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NBadge";

import { renderElement } from "@root/.storybook/utils/renderElement";
import { functionalCustomElement } from "chatora";

import { NBadge } from "./NBadge";

const meta = {
  title: "Components/NBadge",
  tags: ["autodocs"],
  render: args => renderElement(
    "n-badge",
    functionalCustomElement(NBadge),
    args.slot,
    args,
  ),
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "success", "warning", "error"],
      description: "Badge type",
    },
    text: {
      control: { type: "text" },
      description: "Badge text",
    },
    slot: {
      control: { type: "text" },
      description: "<slot> content",
      table: {
        category: "<slot>",
      },
    },
  },
  args: {
    slot: "slot",
  },
} satisfies Meta<Props & { slot?: string }>;

export default meta;
type Story = StoryObj<Props & { slot?: string }>;

export const Primary: Story = {
  args: {
    text: "Badge",
    type: "primary",
  },
};
