// import component
import { NButton } from "@/components/common/NButton/NButton.ce";
import { NH1 } from "@/components/common/NH1/NH1.ce";
import { NH2 } from "@/components/common/NH2/NH2.ce";
import { NH3 } from "@/components/common/NH3/NH3.ce";
import { NH4 } from "@/components/common/NH4/NH4.ce";
import { NH5 } from "@/components/common/NH5/NH5.ce";
import { NH6 } from "@/components/common/NH6/NH6.ce";
import { NHeader } from "@/components/common/NHeader/NHeader.ce";
import { NInput } from "@/components/common/NInput/NInput.ce";
import { NLi } from "@/components/common/NLi/NLi.ce";
import { NUl } from "@/components/common/NUl/NUl.ce";
import { NBreadcrumb } from "@/components/composite/NBreadcrumb/NBreadcrumb.ce";
import { NError } from "@/components/composite/NError/NError.ce";

// export component type
export type { NButtonEmits, NButtonProps } from "@/components/common/NButton/NButton.ce";
export type { NH1Emits } from "@/components/common/NH1/NH1.ce";
export type { NH2Emits } from "@/components/common/NH2/NH2.ce";
export type { NH3Emits } from "@/components/common/NH3/NH3.ce";
export type { NH4Emits } from "@/components/common/NH4/NH4.ce";
export type { NH5Emits } from "@/components/common/NH5/NH5.ce";
export type { NH6Emits } from "@/components/common/NH6/NH6.ce";
export type { NHeaderEmits, NHeaderProps } from "@/components/common/NHeader/NHeader.ce";
export type { NInputEmits, NInputProps } from "@/components/common/NInput/NInput.ce";
export type { NLiEmits, NLiProps } from "@/components/common/NLi/NLi.ce";
export type { NUlEmits, NUlProps } from "@/components/common/NUl/NUl.ce";
export type { NBreadcrumbProps } from "@/components/composite/NBreadcrumb/NBreadcrumb.ce";
export type { NErrorEmits, NErrorProps } from "@/components/composite/NError/NError.ce";

const Elements = {
  "n-breadcrumb": NBreadcrumb,
  "n-button": NButton,
  "n-input": NInput,
  "n-error": NError,
  "n-ul": NUl,
  "n-li": NLi,
  "n-header": NHeader,
  "n-h1": NH1,
  "n-h2": NH2,
  "n-h3": NH3,
  "n-h4": NH4,
  "n-h5": NH5,
  "n-h6": NH6,
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
