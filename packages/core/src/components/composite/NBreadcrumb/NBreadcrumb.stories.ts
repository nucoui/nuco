import type { Meta, StoryObj } from "@storybook/web-components";
import type { NBreadcrumbType } from "./NBreadcrumb.ce";
import { renderElement } from "@root/.storybook/utils/renderElement";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-breadcrumb",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const elm = renderElement("n-breadcrumb", attr);

    const first = renderElement("n-li", {});
    first.innerHTML = "First";
    elm.appendChild(first);

    const second = renderElement("n-li", {});
    second.innerHTML = "Second";
    elm.appendChild(second);

    const third = renderElement("n-li", {});
    third.innerHTML = "Third";
    elm.appendChild(third);

    const fourth = renderElement("n-li", {});
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
