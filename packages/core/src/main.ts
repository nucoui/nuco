import type { NButtonEmits, NButtonProps } from "@/components/NButton/NButton.ce";
import type { NHeaderEmits, NHeaderProps } from "@/components/NHeader/NHeader.ce";
import type { NInputEmits, NInputProps } from "@/components/NInput/NInput.ce";
import { NButton } from "@/components/NButton/NButton.ce";
import { NError } from "@/components/NError/NError.ce";
import { NHeader } from "@/components/NHeader/NHeader.ce";
import { NInput } from "@/components/NInput/NInput.ce";
import { NLi } from "@/components/NLi/NLi.ce";
import { NUl } from "@/components/NUl/NUl.ce";

const Elements = {
  "n-button": NButton,
  "n-input": NInput,
  "n-error": NError,
  "n-ul": NUl,
  "n-li": NLi,
  "n-header": NHeader,
} as const satisfies {
  [key: `n-${string}`]: typeof HTMLElement;
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

  NButtonEmits,
  NButtonProps,
  NHeaderEmits,
  NHeaderProps,
  NInputEmits,
  NInputProps,
};
