import type { Meta, StoryObj } from "@storybook/web-components";
import type { NBreadcrumbProps } from "./NBreadcrumb.ce";
import { renderElement } from "@root/.storybook/utils/renderElement";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-breadcrumb",
  tags: ["autodocs"],
  argTypes: {},
  args: {},
  render: (attr) => {
    const elm = renderElement("n-breadcrumb", attr);
    elm.innerHTML = "slot";

    return elm;
  },
};

export default meta;
type Story = StoryObj<NBreadcrumbProps>;

export const Primary: Story = {
  args: {},
};
