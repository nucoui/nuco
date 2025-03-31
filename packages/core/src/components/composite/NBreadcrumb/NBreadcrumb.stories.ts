import type { Meta, StoryObj } from "@storybook/web-components";
import { NLi } from "@/main";
import { renderElement } from "@root/.storybook/utils/renderElement";
import { NBreadcrumb, type NBreadcrumbType } from "./NBreadcrumb.ce";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-breadcrumb",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const elm = renderElement("n-breadcrumb", NBreadcrumb, attr);

    const first = renderElement("n-li", NLi, {});
    first.innerHTML = "First";
    elm.appendChild(first);

    const second = renderElement("n-li", NLi, {});
    second.innerHTML = "Second";
    elm.appendChild(second);

    const third = renderElement("n-li", NLi, {});
    third.innerHTML = "Third";
    elm.appendChild(third);

    const fourth = renderElement("n-li", NLi, {});
    fourth.innerHTML = "Fourth";
    elm.appendChild(fourth);

    return elm;
  },
};

export default meta;
type Story = StoryObj<NBreadcrumbType["Props"]>;

export const Primary: Story = {
  args: {},
};
