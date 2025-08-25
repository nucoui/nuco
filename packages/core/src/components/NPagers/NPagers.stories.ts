import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NPagers";

import { genSDNPager } from "@/components/NPager/NPager";

import { renderElement } from "@root/.storybook/utils/renderElement";
import { genSDNPagers } from "./NPagers";

const meta = {
  title: "Components/NPagers",
  tags: ["autodocs"],
  render: args => renderElement(
    "n-pagers",
    genSDNPagers(),
    (() => {
      const pager1 = renderElement("n-pager", genSDNPager(), "Prev", { type: "prev", slot: "prev" });
      const pager2 = renderElement("n-pager", genSDNPager(), "Next", { type: "next", slot: "next" });

      return `${pager1}${pager2}`;
    })(),
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
  args: {
    slot: "slot",
  },
} satisfies Meta<Props & { slot?: string }>;

export default meta;
type Story = StoryObj<Props & { slot?: string }>;

export const Primary: Story = {
  args: {},
};
