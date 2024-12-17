import type { Meta, StoryObj } from "@storybook/web-components";
import type { NukoErrorProps } from "./NukoError.ce";
import { renderElement } from "../../../.storybook/utils/renderElement";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "nuko-error",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const element = renderElement("nuko-error", attr);
    const errorMessages = document.createElement("ul");
    errorMessages?.appendChild(document.createElement("li")).appendChild(document.createTextNode("Error message"));
    element.appendChild(errorMessages);

    return element;
  },
};

export default meta;
type Story = StoryObj<NukoErrorProps>;

export const Primary: Story = {
  args: {},
};
