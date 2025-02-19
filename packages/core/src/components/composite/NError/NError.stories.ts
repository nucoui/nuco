import type { Meta, StoryObj } from "@storybook/web-components";
import type { NErrorType } from "./NError.ce";
import { renderElement } from "@root/.storybook/utils/renderElement";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-error",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const element = renderElement("n-error", attr);
    const nUl = renderElement("n-ul", {});

    const nLi = renderElement("n-li", {});
    nLi.appendChild(document.createTextNode("Error message"));

    nUl?.appendChild(nLi);

    element.appendChild(nUl);

    return element;
  },
};

export default meta;
type Story = StoryObj<NErrorType["Props"]>;

export const Primary: Story = {
  args: {},
};
