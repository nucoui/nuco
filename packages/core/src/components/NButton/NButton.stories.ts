import type { Meta, StoryObj } from "@storybook/web-components";
import type NButtonCe from "./NButton.ce.vue";
import { resisterElement } from "../../main";

const dynamicArgTypes = {
  type: {
    control: "select",
    options: ["button", "submit", "reset", "anchor", "toggle"],
  },
  variant: {
    control: "select",
    options: ["primary", "secondary", "error"],
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
} as const satisfies Meta["argTypes"];

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-button",
  tags: ["autodocs"],
  argTypes: dynamicArgTypes,
  args: {
    type: "button",
    variant: "primary",
    disabled: false,
    href: "https://google.com",
    target: "_self",
  },
  render: (attr) => {
    resisterElement("n-button");

    const element = document.createElement("n-button");
    element.innerHTML = "Button";

    for (const key in attr) {
      if (typeof attr[key] === "boolean") {
        if (attr[key]) {
          element.setAttribute(key, "");
        }
        continue;
      }
      element.setAttribute(key, (attr as Record<string, any>)[key]);
    }

    return element;
  },
};

export default meta;
type Story = StoryObj<InstanceType<typeof NButtonCe>["$props"]>;

export const Primary: Story = {
  args: {
    type: "button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    type: "button",
    variant: "secondary",
  },
};

export const Error: Story = {
  args: {
    type: "button",
    variant: "error",
  },
};
