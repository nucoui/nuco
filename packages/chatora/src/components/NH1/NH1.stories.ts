import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NH1";
import { functionalCustomElement } from "chatora";
import { renderElement } from "../../../.storybook/utils/renderElement";
import resetStyle from "../../styles/reset.css?raw";
import { NH1 } from "./NH1";
import style from "./NH1.scss?raw";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/NH1",
  tags: ["autodocs"],
  render: args => renderElement("n-h1", functionalCustomElement(NH1, { styles: [style, resetStyle] }), args.slot, args),
  argTypes: {
    slot: {
      control: "text",
      description: "Heading text content",
    },
  },
  args: {
    slot: "slot",
  },
} satisfies Meta<Props & { slot?: string }>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
