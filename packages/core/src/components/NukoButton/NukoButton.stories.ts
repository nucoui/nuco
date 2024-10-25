import type { Meta, StoryObj } from "@storybook/web-components";
import type NukoButtonCe from "./NukoButton.ce.vue";
import { resisterElement } from "../../main";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "nuko-button",
  render: (attr) => {
    resisterElement("nuko-button");

    const element = document.createElement("nuko-button");
    element.innerHTML = "slot content";

    for (const key in attr) {
      element.setAttribute(key, (attr as Record<string, any>)[key]);
    }

    return element;
  },
};

export default meta;
type Story = StoryObj<InstanceType<typeof NukoButtonCe>["$props"]>;

export const FirstStory: Story = {
  args: {
    type: "button",
  },
};
