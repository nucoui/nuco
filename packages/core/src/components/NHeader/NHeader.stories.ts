import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NHeader";

import { renderElement } from "@root/.storybook/utils/renderElement";
import { genSDNHeader } from "./NHeader";

const meta = {
  title: "Components/NHeader",
  tags: ["autodocs"],
  render: args => renderElement(
    "n-header",
    genSDNHeader(),
    args.slot,
    args,
  ),
  argTypes: {
    isLogo: {
      control: { type: "boolean" },
    },
    isMiddle: {
      control: { type: "boolean" },
    },
    isNavToggle: {
      control: { type: "boolean" },
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
    slot: "Header Content",
  },
} satisfies Meta<Props & { slot?: string }>;

export default meta;
type Story = StoryObj<Props & { slot?: string }>;

export const Primary: Story = {
  args: {},
};
