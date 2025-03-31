import type { Meta, StoryObj } from "@storybook/web-components";
import { NAnchor } from "@/main";
import { renderElement } from "@root/.storybook/utils/renderElement";
import { NNavAccordion, type NNavAccordionType } from "./NNavAccordion.ce";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-nav-accordion",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const elm = renderElement("n-nav-accordion", NNavAccordion, attr);

    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.gap = "1rem";

    const detail = renderElement("n-anchor", NAnchor, { underline: "none" });
    detail.innerHTML = "Detail";
    const detail2 = renderElement("n-anchor", NAnchor, { underline: "none" });
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
