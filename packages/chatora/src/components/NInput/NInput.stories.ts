import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NInput";

import { renderElement } from "@root/.storybook/utils/renderElement";
import { functionalCustomElement } from "chatora";

import { NInput } from "./NInput";

const meta = {
  title: "Components/NInput",
  tags: ["autodocs"],
  render: args => renderElement(
    "n-input",
    class Input extends functionalCustomElement(NInput) {
      static formAssociated = true;
    },
    document.createTextNode(args.slot || ""),
    args,
  ),
  argTypes: {
    type: {
      control: "select",
      options: [
        "button",
        "checkbox",
        "color",
        "date",
        "datetime-local",
        "email",
        "file",
        "hidden",
        "image",
        "month",
        "number",
        "password",
        "radio",
        "range",
        "reset",
        "search",
        "submit",
        "tel",
        "text",
        "time",
        "url",
        "week",
      ],
    },
    name: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    value: {
      control: "text",
    },
    required: {
      control: "boolean",
    },
    maxlength: {
      control: "number",
    },
    minlength: {
      control: "number",
    },
    invalid: {
      control: "boolean",
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
    type: "text",
    name: "name",
    placeholder: "Placeholder",
    value: "",
    required: false,
    invalid: false,
    slot: "Input Field",
  },
} satisfies Meta<Props & { slot?: string }>;

export default meta;
type Story = StoryObj<Props & { slot?: string }>;

export const Primary: Story = {
  args: {
    type: "text",
    name: "name",
    placeholder: "Placeholder",
  },
};
