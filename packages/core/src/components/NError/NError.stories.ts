import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NError";

import { renderElement } from "@root/.storybook/utils/renderElement";
import { genSDNError } from "./NError";

// ...existing code...

const meta = {
  title: "Components/NError",
  tags: ["autodocs"],
  render: args => renderElement(
    "n-error",
    genSDNError(),
    args.slot,
    args,
  ),
  argTypes: {
    slot: {
      control: { type: "text" },
      description: "<slot> content",
      table: {
        category: "<slot>",
      },
    },
  },
  args: {},
} satisfies Meta<Props & { slot?: string }>;

export default meta;
type Story = StoryObj<Props & { slot?: string }>;

export const Primary: Story = {
  args: {},
};
