import type { Meta, StoryObj } from "@storybook/react";

import { H1 } from "./H1";

const meta: Meta<typeof H1> = {
  tags: ["autodocs"],
  component: (attr) => {
    return (
      <H1 {...attr}>
        Heading 1
      </H1>
    );
  },
};

export default meta;
type Story = StoryObj<typeof H1>;

export const Primary: Story = {
  args: {},
};
