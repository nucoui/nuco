import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  tags: ["autodocs"],
  component: (attr) => {
    return (
      <Button {...attr}>
        Button
      </Button>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    type: "button",
    variant: "primary",
  },
};
