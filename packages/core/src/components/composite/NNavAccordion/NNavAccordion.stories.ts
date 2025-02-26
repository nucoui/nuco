import type { Meta, StoryObj } from "@storybook/web-components";
import type { NNavAccordionType } from "./NNavAccordion.ce";
import { renderElement } from "@root/.storybook/utils/renderElement";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-nav-accordion",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const elm = renderElement("n-nav-accordion", attr);
    const detail = renderElement("n-button", { type: "anchor", variant: "tertiary", width: "auto" });
    detail.innerHTML = "Detail";

    elm.appendChild(detail);

    return elm;
  },
};

export default meta;
type Story = StoryObj<NNavAccordionType["Props"]>;

export const Primary: Story = {
  args: {},
};
