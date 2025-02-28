import { NAnchor } from "@/components/common/NAnchor/NAnchor.ce";
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
import { NNavAccordion } from "@/components/composite/NNavAccordion/NNavAccordion.ce";

const Elements = {
  "n-anchor": NAnchor,
  "n-nav-accordion": NNavAccordion,
  "n-error": NError,
  "n-breadcrumb": NBreadcrumb,
  "n-ul": NUl,
  "n-li": NLi,
  "n-input": NInput,
  "n-header": NHeader,
  "n-h6": NH6,
  "n-h5": NH5,
  "n-h4": NH4,
  "n-h3": NH3,
  "n-h2": NH2,
  "n-h1": NH1,
  "n-button": NButton,
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
    // // eslint-disable-next-line no-console
    // console.info(`Element "${name}" is registered.`);
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
  Elements,
  resister,
  resisterElement,
};

export type {
  ElementNames,
};
