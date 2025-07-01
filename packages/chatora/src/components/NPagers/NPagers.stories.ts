import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NPagers";

import { NPager } from "@/components/NPager/NPager";
import { renderElement } from "@root/.storybook/utils/renderElement";

import { functionalCustomElement } from "chatora";
import { NPagers } from "./NPagers";

const meta = {
  title: "Components/NPagers",
  tags: ["autodocs"],
  render: args => renderElement(
    "n-pagers",
    functionalCustomElement(NPagers),
    (() => {
      const pager1 = renderElement("n-pager", functionalCustomElement(NPager), "Prev", { type: "prev", slot: "prev" });
      const pager2 = renderElement("n-pager", functionalCustomElement(NPager), "Next", { type: "next", slot: "next" });

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
