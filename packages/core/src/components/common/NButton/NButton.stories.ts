import type { NButtonType } from "@/(old)components/common/NButton/NButton.ce";
import type { Meta, StoryObj } from "@storybook/web-components";
import type NButtonCe from "./NButton.ce.vue";
import { renderElement } from "@root/.storybook/utils/renderElement";

const dynamicArgTypes = {
  type: {
    control: "select",
    options: ["button", "submit", "reset", "anchor", "toggle"],
  },
  variant: {
    control: "select",
    options: ["primary", "secondary", "tertiary", "error"],
  },
  width: {
    control: "select",
    options: ["auto", "stretch"],
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
const meta: Meta<NButtonType["Props"]> = {
  component: "n-button",
  tags: ["autodocs"],
  argTypes: dynamicArgTypes,
  args: {
    type: "button",
    variant: "primary",
    disabled: false,
    width: "stretch",
    href: undefined,
    target: undefined,
  },
  render: (attr) => {
    const element = renderElement("n-button", attr);
    element.innerHTML = "Button";

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

export const Tertiary: Story = {
  args: {
    type: "button",
    variant: "tertiary",
  },
};

export const Error: Story = {
  args: {
    type: "button",
    variant: "error",
  },
};
