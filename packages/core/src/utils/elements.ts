import { NAnchor } from "@/components/common/NAnchor/NAnchor.ce";
import { NButton } from "@/components/common/NButton/NButton.ce";
import { NDivider } from "@/components/common/NDivider/NDivider.ce";
import { NH1 } from "@/components/common/NH1/NH1.ce";
import { NH2 } from "@/components/common/NH2/NH2.ce";
import { NH3 } from "@/components/common/NH3/NH3.ce";
import { NH4 } from "@/components/common/NH4/NH4.ce";
import { NH5 } from "@/components/common/NH5/NH5.ce";
import { NH6 } from "@/components/common/NH6/NH6.ce";
import { NHeader } from "@/components/common/NHeader/NHeader.ce";
import { NInput } from "@/components/common/NInput/NInput.ce";
import { NLi } from "@/components/common/NLi/NLi.ce";
import { NOption } from "@/components/common/NOption/NOption.ce";
import { NSelect } from "@/components/common/NSelect/NSelect.ce";
import { NUl } from "@/components/common/NUl/NUl.ce";
import { NBadge } from "@/components/composite/NBadge/NBadge.ce";
import { NBreadcrumb } from "@/components/composite/NBreadcrumb/NBreadcrumb.ce";
import { NCodeBlock } from "@/components/composite/NCodeBlock/NCodeBlock.ce";
import { NError } from "@/components/composite/NError/NError.ce";
import { NNavAccordion } from "@/components/composite/NNavAccordion/NNavAccordion.ce";
import { NPager } from "@/components/composite/NPager/NPager.ce";
import { NPagers } from "@/components/composite/NPagers/NPagers.ce";

const Elements = {
  "n-pager": NPager,
  "n-pagers": NPagers,
  "n-code-block": NCodeBlock,
  "n-divider": NDivider,
  "n-badge": NBadge,
  "n-option": NOption,
  "n-select": NSelect,
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

 type ElementsName = keyof typeof Elements;
 type ElementsMap = typeof Elements;

export {
  Elements,
};

export type {
  ElementsMap,
  ElementsName,
};
