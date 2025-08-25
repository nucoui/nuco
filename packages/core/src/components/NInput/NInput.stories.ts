import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { Props } from "./NInput";

import { genSDNButton } from "@/components/NButton/NButton";
import { renderElement } from "@root/.storybook/utils/renderElement";
import { genSDNInput } from "./NInput";

const meta = {
  title: "Components/NInput",
  tags: ["autodocs"],
  render: args => renderElement(
    "n-input",
    genSDNInput(),
    document.createTextNode(args.slot || ""),
    args,
  ),
  argTypes: {
    type: {
      control: "select",
      options: [
        "button",
        "checkbox",
        "color",
        "date",
        "datetime-local",
        "email",
        "file",
        "hidden",
        "image",
        "month",
        "number",
        "password",
        "radio",
        "range",
        "reset",
        "search",
        "submit",
        "tel",
        "text",
        "time",
        "url",
        "week",
      ],
    },
    name: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    value: {
      control: "text",
    },
    required: {
      control: "boolean",
    },
    maxlength: {
      control: "number",
    },
    minlength: {
      control: "number",
    },
    invalid: {
      control: "boolean",
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
    type: "text",
    name: "name",
    placeholder: "Placeholder",
    value: "",
    required: false,
    invalid: false,
    slot: "Input Field",
  },
} satisfies Meta<Props & { slot?: string }>;

export default meta;
type Story = StoryObj<Props & { slot?: string }>;

export const Primary: Story = {
  args: {
    type: "text",
    name: "name",
    placeholder: "Placeholder",
  },
};

export const Playground: Story = {
  args: {},
  render: (_args) => {
    if (!customElements.get("n-input")) {
      customElements.define("n-input", class extends genSDNInput() {
        static formAssociated = true;
      });
    }
    if (!customElements.get("n-button")) {
      customElements.define("n-button", genSDNButton());
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
      <n-input name="name" type="text"></n-input>
      <n-button type="submit" width="stretch">Submit</n-button>
    `;

    return form;
  },
};
