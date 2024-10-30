import { defineCustomElement } from "vue";
import NukoButtonCe from "./components/NukoButton/NukoButton.ce.vue";
import NukoInputCe from "./components/NukoInput/NukoInput.ce.vue";

const NukoButton = defineCustomElement(NukoButtonCe);
const NukoInput = defineCustomElement(NukoInputCe);

const Elements = {
  "nuko-button": NukoButton,
  "nuko-input": NukoInput,
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
