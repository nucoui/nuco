import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NSelect";

import { NButton } from "@/components/NButton/NButton";
import { NOption } from "@/components/NOption/NOption";

import { renderElement } from "@root/.storybook/utils/renderElement";
import { functionalCustomElement } from "chatora";
import { NSelect } from "./NSelect";

const meta = {
  title: "Components/NSelect/NSelect",
  tags: ["autodocs"],
  render: args => renderElement(
    "n-select",
    functionalCustomElement(NSelect),
    renderElement(
      "n-option",
      functionalCustomElement(NOption),
      document.createTextNode(args.slot || ""),
      {},
    ),
    args,
  ),
  argTypes: {
    name: {
      control: { type: "text" },
      description: "name attribute for form integration",
      table: { category: "Props" },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable the select",
      table: { category: "Props" },
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text when nothing is selected",
      table: { category: "Props" },
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
    name: "n-select",
    disabled: false,
    placeholder: "Placeholder",
    slot: "Slot content",
  },
} satisfies Meta<Props & { slot?: string }>;

export default meta;
type Story = StoryObj<Props & { slot?: string }>;

export const Primary: Story = {
  args: {},
};

export const Playground: Story = {
  args: {},
  render: (args) => {
    if (!customElements.get("n-select")) {
      customElements.define("n-select", class extends functionalCustomElement(NSelect) {
        static formAssociated = true;
      });
    }
    if (!customElements.get("n-option")) {
      customElements.define("n-option", functionalCustomElement(NOption));
    }
    if (!customElements.get("n-button")) {
      customElements.define("n-button", functionalCustomElement(NButton));
    }

    const form = document.createElement("form");
    form.style = "display: flex; flex-direction: column; gap: 1rem;";
    form.onsubmit = (e: Event) => {
      e.preventDefault();

      const formData = new FormData(form);

      const name = formData.get("name")?.toString();

      if (!name) {
        // eslint-disable-next-line no-alert
        alert("Please select an option.");

        return;
      }

      // 確認ダイアログ
      const confirmationMessage = `name: ${name}\n\nAre you sure you want to submit the form?`;

      // eslint-disable-next-line no-alert
      if (confirm(confirmationMessage)) {
        // eslint-disable-next-line no-alert
        alert("Form submitted successfully!");
      }
    };
    form.innerHTML = `
      <n-select name="name" placeholder="${args.placeholder}" ${args.disabled ? "disabled" : ""}>
        <n-option value="option1">Option 1</n-option>
        <n-option value="option2">Option 2</n-option>
        <n-option value="option3">Option 3</n-option>
      </n-select>
      <n-button type="submit" width="stretch">Submit</n-button>
    `;

    return form;
  },
};
