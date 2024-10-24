import type { Meta, StoryObj } from "@storybook/web-components";
import { resisterElement } from "../../main";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "nuko-button",
};

export default meta;
type Story = StoryObj;

export const FirstStory: Story = {
  args: {
    slot: "Default Slot Content",
    attr: { type: "button" },
  },
  render: ({ slot, attr }) => {
    resisterElement("nuko-button");

    const element = document.createElement("nuko-button");
    element.innerHTML = slot;

    Object.keys(attr).forEach((key) => {
      element.setAttribute(key, attr[key]);
    });

    return element;
  },
};
