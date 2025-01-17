import type { Meta, StoryObj } from "@storybook/react";

import { H5 } from "./H5";

const meta: Meta<typeof H5> = {
  tags: ["autodocs"],
  component: (attr) => {
    return (
      <H5 {...attr}>
        Heading 5
      </H5>
    );
  },
};

export default meta;
type Story = StoryObj<typeof H5>;

export const Primary: Story = {
  args: {},
};
