import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NOption";

import { renderElement } from "@root/.storybook/utils/renderElement";
import { genSDNOption } from "./NOption";

const meta = {
  title: "Components/NSelect/NOption",
  tags: ["autodocs"],
  render: args => renderElement("n-option", genSDNOption(), args.slot, args),
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
    slot: "Option Item",
  },
} satisfies Meta<Props & { slot?: string }>;

export default meta;
type Story = StoryObj<Props & { slot?: string }>;

export const Primary: Story = {
  args: {
    selected: true,
  },
};
