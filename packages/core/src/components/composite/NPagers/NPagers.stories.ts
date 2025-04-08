import type { Meta, StoryObj } from "@storybook/web-components";
import { NPager } from "@/main";
import { renderElement } from "@root/.storybook/utils/renderElement";
import { NPagers, type NPagersType } from "./NPagers.ce";

// This default export determines where your story goes in the story list
const meta: Meta<NPagersType["Props"]> = {
  component: "n-pagers",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const elm = renderElement("n-pagers", NPagers, attr);

    const pagerPrev = renderElement("n-pager", NPager, {
      type: "prev",
      slot: "prev",
    });

    const pagerNext = renderElement("n-pager", NPager, {
      type: "next",
      slot: "next",
    });

    elm.appendChild(pagerPrev);
    elm.appendChild(pagerNext);

    return elm;
  },
};

export default meta;
type Story = StoryObj<NPagersType["Props"]>;

export const Primary: Story = {
  args: {},
};
