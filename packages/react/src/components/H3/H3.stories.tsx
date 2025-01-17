import type { Meta, StoryObj } from "@storybook/react";

import { H3 } from "./H3";

const meta: Meta<typeof H3> = {
  tags: ["autodocs"],
  component: (attr) => {
    return (
      <H3 {...attr}>
        Heading 3
      </H3>
    );
  },
};

export default meta;
type Story = StoryObj<typeof H3>;

export const Primary: Story = {
  args: {},
};
