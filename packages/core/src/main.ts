import { NButton } from "@/components/NButton/NButton.ce";
import { NError } from "@/components/NError/NError.ce";
import { NH1 } from "@/components/NH1/NH1.ce";
import { NH2 } from "@/components/NH2/NH2.ce";
import { NHeader } from "@/components/NHeader/NHeader.ce";
import { NInput } from "@/components/NInput/NInput.ce";
import { NLi } from "@/components/NLi/NLi.ce";
import { NUl } from "@/components/NUl/NUl.ce";

export type { NButtonEmits, NButtonProps } from "@/components/NButton/NButton.ce";
export type { NErrorEmits, NErrorProps } from "@/components/NError/NError.ce";
export type { NH1Emits } from "@/components/NH1/NH1.ce";
export type { NH2Emits } from "@/components/NH2/NH2.ce";
export type { NHeaderEmits, NHeaderProps } from "@/components/NHeader/NHeader.ce";
export type { NInputEmits, NInputProps } from "@/components/NInput/NInput.ce";
export type { NLiEmits, NLiProps } from "@/components/NLi/NLi.ce";
export type { NUlEmits, NUlProps } from "@/components/NUl/NUl.ce";

const Elements = {
  "n-button": NButton,
  "n-input": NInput,
  "n-error": NError,
  "n-ul": NUl,
  "n-li": NLi,
  "n-header": NHeader,
  "n-h1": NH1,
  "n-h2": NH2,
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
};
