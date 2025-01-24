import type { Meta, StoryObj } from "@storybook/react";

import { H2 } from "./H2";

const meta: Meta<typeof H2> = {
  tags: ["autodocs"],
  component: (attr) => {
    return (
      <H2 {...attr}>
        Heading 2
      </H2>
    );
  },
};

export default meta;
type Story = StoryObj<typeof H2>;

export const Primary: Story = {
  args: {},
};
