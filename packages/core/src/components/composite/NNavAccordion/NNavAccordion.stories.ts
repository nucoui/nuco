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

    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.gap = "1rem";

    const detail = renderElement("n-anchor", { underline: "none" });
    detail.innerHTML = "Detail";
    const detail2 = renderElement("n-anchor", { underline: "none" });
    detail2.innerHTML = "Detail";

    div.appendChild(detail);
    div.appendChild(detail2);

    elm.appendChild(div);

    return elm;
  },
};

export default meta;
type Story = StoryObj<NNavAccordionType["Props"]>;

export const Primary: Story = {
  args: {},
};
