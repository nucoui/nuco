import type { NukoButtonEmits, NukoButtonProps } from "./components/NukoButton/NukoButton.ce";
import type { NukoInputEmits, NukoInputProps } from "./components/NukoInput/NukoInput.ce";
import { NukoButton } from "./components/NukoButton/NukoButton.ce";
import { NukoInput } from "./components/NukoInput/NukoInput.ce";

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
    console.info(`Element "${name}" is registered.`);
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

export {
  resister,
  resisterElement,
};

export type {
  ElementNames,

  NukoButtonEmits,
  NukoButtonProps,

  NukoInputEmits,
  NukoInputProps,
};
