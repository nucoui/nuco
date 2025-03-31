import type { Meta, StoryObj } from "@storybook/web-components";
import { NLi, NUl } from "@/main";
import { renderElement } from "@root/.storybook/utils/renderElement";
import { NError, type NErrorType } from "./NError.ce";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-error",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const element = renderElement("n-error", NError, attr);
    const nUl = renderElement("n-ul", NUl, {});

    const nLi = renderElement("n-li", NLi, {});
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
