import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NBreadcrumb";
import { NLi } from "@/components/NLi/NLi";

import { defineElement } from "@root/.storybook/utils/defineElement";
import { NBreadcrumb } from "./NBreadcrumb";

const meta = {
  title: "Components/NBreadcrumb",
  tags: ["autodocs"],
  render: (_args) => {
    const nBreadcrumbName = defineElement(NBreadcrumb);
    const nBreadcrumb = document.createElement(nBreadcrumbName);

    const nLiName = defineElement(NLi);
    const nLi = document.createElement(nLiName);
    nLi.innerHTML = "Home";
    nBreadcrumb.appendChild(nLi);

    const nLi2 = document.createElement(nLiName);
    nLi2.innerHTML = "About";
    nBreadcrumb.appendChild(nLi2);

    const nLi3 = document.createElement(nLiName);
    nLi3.innerHTML = "Contact";
    nBreadcrumb.appendChild(nLi3);

    return nBreadcrumb;
  },
  argTypes: {},
  args: {},
} satisfies Meta<Props & { slot?: string }>;

export default meta;
type Story = StoryObj<Props & { slot?: string }>;

export const Primary: Story = {
  args: {},
};
