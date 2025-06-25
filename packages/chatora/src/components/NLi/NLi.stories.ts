import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NLi";

import { renderElement } from "@root/.storybook/utils/renderElement";
import { functionalCustomElement } from "chatora";

import { NLi } from "./NLi";

const meta = {
  title: "Components/NList/NLi",
  tags: ["autodocs"],
  render: args => renderElement("n-li", functionalCustomElement(NLi), args.slot, args),
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
    slot: "List Item",
  },
} satisfies Meta<Props & { slot?: string }>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
