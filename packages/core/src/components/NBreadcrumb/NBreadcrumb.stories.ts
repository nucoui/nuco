import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NBreadcrumb";
import { defineNLi } from "@/components/NLi/NLi";

import { defineNBreadcrumb } from "./NBreadcrumb";

const meta = {
  title: "Components/NBreadcrumb",
  tags: ["autodocs"],
  render: (_args) => {
    defineNBreadcrumb();
    const nBreadcrumb = document.createElement("n-breadcrumb");

    defineNLi();
    const nLi = document.createElement("n-li");
    nLi.innerHTML = "Home";
    nBreadcrumb.appendChild(nLi);

    const nLi2 = document.createElement("n-li");
    nLi2.innerHTML = "About";
    nBreadcrumb.appendChild(nLi2);

    const nLi3 = document.createElement("n-li");
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
