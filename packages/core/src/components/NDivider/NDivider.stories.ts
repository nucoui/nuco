import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NDivider";

import { renderElement } from "@root/.storybook/utils/renderElement";
import { genSDNDivider } from "./NDivider";

const meta = {
  title: "Components/NDivider",
  tags: ["autodocs"],
  render: args => renderElement(
    "n-divider",
    genSDNDivider(),
    args.slot,
    args,
  ),
  argTypes: {
    vertical: {
      control: { type: "boolean" },
      description: "Whether the divider is vertical",
      table: {
        category: "Properties",
      },
    },
    text: {
      control: { type: "text" },
      description: "Text content to display in the divider",
      table: {
        category: "Properties",
      },
    },
    textPosition: {
      control: { type: "select" },
      options: ["start", "center", "end"],
      description: "Position of the text within the divider",
      table: {
        category: "Properties",
      },
    },
    slot: {
      control: { type: "text" },
      description: "<slot> content",
      table: {
        category: "<slot>",
      },
    },
  },
  args: {
    vertical: false,
    text: "",
    textPosition: "start",
    slot: "",
  },
} satisfies Meta<Props & { slot?: string }>;

export default meta;
type Story = StoryObj<Props & { slot?: string }>;

export const Primary: Story = {
  args: {},
};

export const WithText: Story = {
  args: {
    text: "Divider Text",
  },
};

export const TextCenter: Story = {
  args: {
    text: "Centered Text",
    textPosition: "center",
  },
};

export const TextEnd: Story = {
  args: {
    text: "End Text",
    textPosition: "end",
  },
};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
};

export const VerticalWithText: Story = {
  args: {
    vertical: true,
    text: "Vertical Text",
    textPosition: "center",
  },
};
