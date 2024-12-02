import type { Meta, StoryObj } from "@storybook/web-components";
import type NukoInputCe from "./NukoInput.ce.vue";
import { resisterElement } from "../../main";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "nuko-input",
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
  },
  args: {
    required: false,
  },
  render: (attr) => {
    resisterElement("nuko-input");

    const input = document.createElement("nuko-input");

    // input.addEventListener("input", () => {
    //   console.log("onInput");
    // });

    // input.addEventListener("change", () => {
    //   console.log("onChange");
    // });

    for (const key in attr) {
      if (typeof attr[key] === "boolean") {
        if (attr[key]) {
          input.setAttribute(key, "");
        }
        else {
          input.removeAttribute(key);
        }
        continue;
      }
      input.setAttribute(key, (attr as Record<string, any>)[key]);
    }

    return input;
  },
};

export default meta;
type Story = StoryObj<InstanceType<typeof NukoInputCe>["$props"]>;

export const Primary: Story = {
  args: {
    type: "text",
    name: "name",
    placeholder: "Placeholder",
  },
};

export const Playground: Story = {
  args: {
    type: "text",
    name: "name",
    placeholder: "Please enter your name",
  },
  render: (attr) => {
    resisterElement("nuko-input");
    resisterElement("nuko-button");

    const form = document.createElement("form");
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.gap = "8px";

    const nukoInput = document.createElement("nuko-input");
    nukoInput.setAttribute("type", "text");
    nukoInput.setAttribute("minlength", "3");
    nukoInput.setAttribute("maxlength", "10");
    for (const key in attr) {
      nukoInput.setAttribute(key, (attr as Record<string, any>)[key]);
    }

    const submitButton = document.createElement("nuko-button");
    (submitButton as HTMLInputElement).type = "submit";
    submitButton.textContent = "Submit";

    form.appendChild(nukoInput);
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
