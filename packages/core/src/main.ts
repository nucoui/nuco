import type { NukoButtonEmits, NukoButtonProps } from "@/components/NukoButton/NukoButton.ce";
import type { NukoInputEmits, NukoInputProps } from "@/components/NukoInput/NukoInput.ce";
import { NukoButton } from "@/components/NukoButton/NukoButton.ce";
import { NukoError } from "@/components/NukoError/NukoError.ce";
import { NukoInput } from "@/components/NukoInput/NukoInput.ce";
import { NukoUl } from "@/components/NukoUl/NukoUl.ce";

const Elements = {
  "nuko-button": NukoButton,
  "nuko-input": NukoInput,
  "nuko-error": NukoError,
  "nuko-ul": NukoUl,
} as const satisfies {
  [key: `nuko-${string}`]: typeof HTMLElement;
};

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
