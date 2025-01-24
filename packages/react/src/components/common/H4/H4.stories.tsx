import type { Meta, StoryObj } from "@storybook/react";

import { H4 } from "./H4";

const meta: Meta<typeof H4> = {
  tags: ["autodocs"],
  component: (attr) => {
    return (
      <H4 {...attr}>
        Heading 4
      </H4>
    );
  },
};

export default meta;
type Story = StoryObj<typeof H4>;

export const Primary: Story = {
  args: {},
};
