import type { Meta, StoryObj } from "@storybook/web-components";
import type NukoButtonCe from "./NukoButton.ce.vue";
import { resisterElement } from "../../main";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "nuko-button",
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "error"],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    type: "button",
    variant: "primary",
    disabled: false,
  },
  render: (attr) => {
    resisterElement("nuko-button");

    const element = document.createElement("nuko-button");
    element.innerHTML = "Button";

    for (const key in attr) {
      if (key === "disabled" && attr[key] === false) {
        continue;
      }
      element.setAttribute(key, (attr as Record<string, any>)[key]);
    }

    return element;
  },
};

export default meta;
type Story = StoryObj<InstanceType<typeof NukoButtonCe>["$props"]>;

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
