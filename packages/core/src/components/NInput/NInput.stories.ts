import type { Meta, StoryObj } from "@storybook/web-components";
import type NInputCe from "./NInput.ce.vue";
import { renderElement } from "../../../.storybook/utils/renderElement";
import { resisterElement } from "../../main";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-input",
  tags: ["autodocs"],
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
  },
  args: {
    required: false,
    invalid: false,
  },
  render: (attr) => {
    return renderElement("n-input", attr);
  },
};

export default meta;
type Story = StoryObj<InstanceType<typeof NInputCe>["$props"]>;

export const Primary: Story = {
  args: {
    type: "text",
    name: "name",
    placeholder: "Placeholder",
  },
};

export const Invalid: Story = {
  args: {
    type: "text",
    name: "name",
    placeholder: "Placeholder",
    invalid: true,
  },
  render: (attr) => {
    const nInput = renderElement("n-input", attr);

    const nError = renderElement("n-error", {});
    nError.textContent = "This is an error message.";
    nError.slot = "error";

    nInput.appendChild(nError);

    return nInput;
  },
};

export const CustomLabel: Story = {
  args: {
    type: "text",
    name: "name",
    placeholder: "Placeholder",
  },
  render: (attr) => {
    const nukoInput = renderElement("n-input", attr);

    const label = document.createElement("span");
    label.textContent = "Custom Label";
    label.slot = "label";
    label.style.display = "flex";
    label.style.gap = "4px";
    label.style.alignItems = "center";

    const labelContent = document.createElement("span");
    labelContent.textContent = "Name";
    labelContent.style.fontWeight = "bold";
    labelContent.style.fontSize = "1.2em";
    label.appendChild(labelContent);

    nukoInput.appendChild(label);

    return nukoInput;
  },
};

export const Playground: Story = {
  args: {
    type: "text",
    name: "name",
    placeholder: "Please enter your name",
  },
  render: (attr) => {
    resisterElement("n-input");
    resisterElement("n-button");

    const form = document.createElement("form");
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.gap = "8px";

    const nInput = renderElement("n-input", attr);
    nInput.setAttribute("type", "text");
    nInput.setAttribute("minlength", "3");
    nInput.setAttribute("maxlength", "10");

    const submitButton = document.createElement("n-button");
    (submitButton as HTMLInputElement).type = "submit";
    submitButton.textContent = "Submit";

    form.appendChild(nInput);
    form.appendChild(submitButton);

    // フォームの送信イベントハンドラ
    form.onsubmit = (e: Event) => {
      e.preventDefault(); // フォームのデフォルト動作をキャンセル

      const formData = new FormData(form);

      // 名前と年齢の値を取得
      const name = formData.get("name")?.toString();

      // 入力チェック
      if (!name) {
        // eslint-disable-next-line no-alert
        alert("名前を入力してください");
        return;
      }

      // 確認ダイアログ
      const confirmationMessage = `名前: ${name}\nこの情報でよろしいですか？`;
      // eslint-disable-next-line no-alert
      if (confirm(confirmationMessage)) {
        // eslint-disable-next-line no-alert
        alert("フォームが送信されました！");
      }
    };

    return form;
  },
};
