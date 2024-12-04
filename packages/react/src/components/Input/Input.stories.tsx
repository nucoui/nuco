import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  tags: ["autodocs"],
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    name: "input",
    type: "text",
    placeholder: "Placeholder",
    maxlength: 100,
    onInput: (event) => {
      // eslint-disable-next-line no-console
      console.log(event?.target?.value);
    },
  },
};
