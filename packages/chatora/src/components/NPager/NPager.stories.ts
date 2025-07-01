import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NPager";

import { renderElement } from "@root/.storybook/utils/renderElement";
import { functionalCustomElement } from "chatora";

import { NPager } from "./NPager";

const meta = {
  title: "Components/NPager",
  tags: ["autodocs"],
  render: args => renderElement(
    "n-pager",
    functionalCustomElement(NPager),
    args.slot,
    args,
  ),
  argTypes: {
    href: {
      control: { type: "text" },
      description: "The URL that the pager points to",
      table: {
        category: "Props",
      },
    },
    type: {
      control: { type: "select" },
      options: ["prev", "next"],
      description: "Pager type",
    },
    target: {
      control: { type: "select" },
      options: ["_blank", "_self", "_parent", "_top"],
      description: "Where to display the linked URL",
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
  args: {},
};
