import type { Meta, StoryObj } from "@storybook/web-components";
import type { NSelectType } from "./NSelect.ce";
import { renderElement } from "@root/.storybook/utils/renderElement";

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: "n-select",
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    disabled: false,
  },
  render: (attr) => {
    const elm = renderElement("n-select", attr);

    const optionA = renderElement("n-option", {
      value: "a",
    });
    optionA.textContent = "Option A";
    optionA.tabIndex = 0;

    const optionB = renderElement("n-option", {
      value: "b",
      disabled: true,
    });
    optionB.textContent = "Option B";
    optionB.tabIndex = 0;

    elm.appendChild(optionA);
    elm.appendChild(optionB);

    return elm;
  },
};

export default meta;
type Story = StoryObj<NSelectType["Props"]>;

export const Primary: Story = {
  args: {},
};

export const Playground: Story = {
  args: {
    name: "name",
  },
  render: (attr) => {
    const elm = renderElement("n-select", attr);

    const optionA = renderElement("n-option", {
      value: "a",
    });
    const optionASlotContent = document.createElement("span");
    optionASlotContent.style.color = "red";
    optionASlotContent.textContent = "Option A";
    optionA.appendChild(optionASlotContent);

    const optionB = renderElement("n-option", {
      value: "b",
      selected: true,
    });
    optionB.appendChild(document.createTextNode("Option B"));

    elm.appendChild(optionA);
    elm.appendChild(optionB);

    const form = document.createElement("form");
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.gap = "1rem";

    const submitButton = renderElement("n-button", {
      type: "submit",
    });
    submitButton.textContent = "Submit";

    form.appendChild(elm);
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
