import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  tags: ["autodocs"],
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    isLogo: true,
    isNavToggle: true,
    isMiddle: true,
  },
};
