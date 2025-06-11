import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NButton";
import { functionalCustomElement } from "chatora";
import { renderElement } from "../../../.storybook/utils/renderElement";
import resetStyle from "../../styles/reset.css?raw";
import { Button } from "./NButton";
import style from "./NButton.scss?raw";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/NButton",
  tags: ["autodocs"],
  render: args => renderElement("n-button", functionalCustomElement(Button, { styles: [style, resetStyle] }), args.slot, args),
  argTypes: {
    type: {
      control: "select",
      options: ["button", "submit", "reset", "anchor"],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "error"],
    },
    width: {
      control: "select",
      options: ["auto", "stretch"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: "boolean",
    },
    href: {
      control: "text",
      if: { arg: "type", eq: "anchor" }, // typeがanchorのときのみ表示
    },
    target: {
      control: "text",
      if: { arg: "type", eq: "anchor" }, // typeがanchorのときのみ表示
    },
    slot: {
      control: { type: "text" },
      description: "\\<slot> content",
      table: {
        category: "<slot>",
      },
    },
  },
  args: {
    type: "button",
    variant: "primary",
    disabled: false,
    width: "stretch",
    size: "medium",
    href: undefined,
    target: undefined,
    slot: "slot",
  },
} satisfies Meta<Props & { slot?: string }>;

export default meta;
type Story = StoryObj<Props>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    type: "button",
  },
};
