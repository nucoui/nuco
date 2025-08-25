import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NNavAccordion";

import { defineNAnchor } from "@/components/NAnchor/NAnchor";

import { defineNNavAccordion } from "./NNavAccordion";

const meta = {
  title: "Components/NNavAccordion",
  tags: ["autodocs"],
  render: (_args) => {
    defineNNavAccordion();
    const nNavAccordion = document.createElement("n-nav-accordion");

    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.gap = "1rem";
    div.style.padding = "0.5rem 0";

    defineNAnchor();
    const nAnchor = document.createElement("n-anchor");
    nAnchor.setAttribute("underline", "none");
    nAnchor.innerHTML = "Detail";

    const nAnchor2 = document.createElement("n-anchor");
    nAnchor2.setAttribute("underline", "none");
    nAnchor2.innerHTML = "Detail";

    div.appendChild(nAnchor);
    div.appendChild(nAnchor2);

    nNavAccordion.appendChild(div);

    return nNavAccordion;
  },
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
