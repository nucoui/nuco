import { defineCustomElement } from "vue";
import NukoButtonCe from "./components/NukoButton.ce.vue";

const NukoButton = defineCustomElement(NukoButtonCe);

const Elements = {
  "nuko-button": NukoButton,
} as const;
type ElementNames = keyof typeof Elements;

const resisterElement = (name: ElementNames) => {
  if (customElements.get(name)) {
    return;
  }
  customElements.define(name, Elements[name]);
};

const resister = () => {
  for (const name in Elements) {
    resisterElement(name as ElementNames);
  }
};

export { NukoButton, resister, resisterElement };
