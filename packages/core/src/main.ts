import { defineCustomElement } from "vue";
import NukoButtonCe from "./components/NukoButton/NukoButton.ce.vue";

const NukoButton = defineCustomElement(NukoButtonCe);

const Elements = {
  "nuko-button": NukoButton,
} as const;
type ElementNames = keyof typeof Elements;

const resisterElement = (name: ElementNames) => {
  if (customElements.get(name)) {
    return;
  }
  try {
    customElements.define(name, Elements[name]);
    // eslint-disable-next-line no-console
    console.info(`Element "${name}" is resistered.`);
  }
  catch (error) {
    console.error(error);
  }
};

const resister = () => {
  for (const name in Elements) {
    resisterElement(name as ElementNames);
  }
};

export { NukoButton, resister, resisterElement };
