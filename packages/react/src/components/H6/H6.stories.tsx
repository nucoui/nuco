import type { Meta, StoryObj } from "@storybook/react";

import { H6 } from "./H6";

const meta: Meta<typeof H6> = {
  tags: ["autodocs"],
  component: (attr) => {
    return (
      <H6 {...attr}>
        Heading 6
      </H6>
    );
  },
};

export default meta;
type Story = StoryObj<typeof H6>;

export const Primary: Story = {
  args: {},
};
