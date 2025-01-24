import type { Meta, StoryObj } from "@storybook/web-components";
import type { NHeaderProps } from "./NHeader.ce";
import { renderElement } from "@root/.storybook/utils/renderElement";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-header",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const background = document.createElement("div");
    background.style.setProperty("background-color", "var(--cs-background-primary)");
    background.style.setProperty("padding", "var(--n-6)");
    background.style.setProperty("border-radius", "var(--n-2)");
    background.style.setProperty("position", "relative");

    const absolute = document.createElement("div");
    absolute.style.setProperty("position", "absolute");
    absolute.style.setProperty("top", "0");
    absolute.style.setProperty("left", "0");
    absolute.style.setProperty("width", "100px");
    absolute.style.setProperty("height", "100px");
    absolute.style.setProperty("background-color", "var(--p-red-400)");
    absolute.style.setProperty("z-index", "0");

    const headerArea = document.createElement("div");
    headerArea.style.setProperty("position", "relative");

    const element = renderElement("n-header", attr);

    headerArea.appendChild(element);

    background.appendChild(absolute);
    background.appendChild(headerArea);

    return background;
  },
};

export default meta;
type Story = StoryObj<NHeaderProps>;

export const Primary: Story = {
  args: {},
};
