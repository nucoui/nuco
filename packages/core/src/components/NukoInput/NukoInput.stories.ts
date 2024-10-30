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
  },
  args: {

  },
  render: (attr) => {
    resisterElement("nuko-input");

    const input = document.createElement("nuko-input");

    for (const key in attr) {
      input.setAttribute(key, (attr as Record<string, any>)[key]);
    }

    return input;
  },
};

export default meta;
type Story = StoryObj<InstanceType<typeof NukoInputCe>["$props"]>;

export const Primary: Story = {
  args: {
  },
};

export const Playground: Story = {
  render: (attr) => {
    resisterElement("nuko-button");
    resisterElement("nuko-input");

    const form = document.createElement("form");
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.gap = "8px";
    form.action = "";
    form.method = "";
    form.addEventListener("submit", (event) => {
      // eslint-disable-next-line no-alert
      if (!window.confirm("本当に送信しますか?")) {
        event.stopPropagation();
        event.preventDefault();
      }
    });
    form.addEventListener("formdata", (event) => {
      // eslint-disable-next-line no-console
      console.log(event.formData);
    });

    const input = form.appendChild(document.createElement("nuko-input"));

    for (const key in attr) {
      input.setAttribute(key, (attr as Record<string, any>)[key]);
    }

    const button = form.appendChild(document.createElement("nuko-button"));
    button.innerHTML = "Submit";
    button.setAttribute("type", "submit");
    button.addEventListener("click", (event) => {
      // eslint-disable-next-line no-alert
      if (!window.confirm("本当に送信しますか?")) {
        event.stopPropagation();
        event.preventDefault();
      }
    });

    return form;
  },
};
