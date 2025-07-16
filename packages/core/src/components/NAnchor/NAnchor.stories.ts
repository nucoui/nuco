import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NAnchor";

import { renderElement } from "@root/.storybook/utils/renderElement";
import { functionalCustomElement } from "chatora";

import { NAnchor } from "./NAnchor";

const meta = {
  title: "Components/NAnchor",
  tags: ["autodocs"],
  render: args => renderElement(
    "n-anchor",
    functionalCustomElement(NAnchor),
    args.slot,
    args,
  ),
  argTypes: {
    href: {
      control: { type: "text" },
      description: "The URL that the hyperlink points to",
      table: {
        category: "Props",
      },
    },
    target: {
      control: { type: "select" },
      options: ["_blank", "_self", "_parent", "_top"],
      description: "Where to display the linked URL",
      table: {
        category: "Props",
      },
    },
    rel: {
      control: { type: "text" },
      description: "The relationship of the linked URL",
      table: {
        category: "Props",
      },
    },
    underline: {
      control: { type: "select" },
      options: ["always", "hover", "none"],
      description: "Whether to show underline decoration",
      table: {
        category: "Props",
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the link is disabled",
      table: {
        category: "Props",
      },
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
    href: "https://example.com",
    target: "_self",
    underline: "solid",
    disabled: false,
    slot: "Click me",
  },
} satisfies Meta<Props & { slot?: string }>;

export default meta;
type Story = StoryObj<Props & { slot?: string }>;

export const Primary: Story = {
  args: {},
};
