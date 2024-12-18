import type { Meta, StoryObj } from "@storybook/web-components";
import type { NErrorProps } from "./NError.ce";
import { renderElement } from "../../../.storybook/utils/renderElement";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-error",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const element = renderElement("n-error", attr);
    const errorMessages = document.createElement("ul");
    errorMessages?.appendChild(document.createElement("li")).appendChild(document.createTextNode("Error message"));
    element.appendChild(errorMessages);

    return element;
  },
};

export default meta;
type Story = StoryObj<NErrorProps>;

export const Primary: Story = {
  args: {},
};
