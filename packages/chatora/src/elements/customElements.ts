import { NAnchor } from "@/components/NAnchor/NAnchor";
import { NBadge } from "@/components/NBadge/NBadge";
import { NBreadcrumb } from "@/components/NBreadcrumb/NBreadcrumb";
import { NButton } from "@/components/NButton/NButton";
import { NCodeBlock } from "@/components/NCodeBlock/NCodeBlock";
import { NDivider } from "@/components/NDivider/NDivider";
import { NError } from "@/components/NError/NError";
import { NH1 } from "@/components/NH1/NH1";
import { NH2 } from "@/components/NH2/NH2";
import { NH3 } from "@/components/NH3/NH3";
import { NH4 } from "@/components/NH4/NH4";
import { NH5 } from "@/components/NH5/NH5";
import { NH6 } from "@/components/NH6/NH6";
import { NHeader } from "@/components/NHeader/NHeader";
import { NInput } from "@/components/NInput/NInput";
import { NLi } from "@/components/NLi/NLi";
import { NNavAccordion } from "@/components/NNavAccordion/NNavAccordion";
import { NOption } from "@/components/NOption/NOption";
import { NPager } from "@/components/NPager/NPager";
import { NPagers } from "@/components/NPagers/NPagers";
import { NSelect } from "@/components/NSelect/NSelect";
import { NUl } from "@/components/NUl/NUl";
import { functionalCustomElement } from "chatora";

const CustomElements = {
  "n-divider": () => functionalCustomElement(NDivider),
  "n-anchor": () => functionalCustomElement(NAnchor),
  "n-pagers": () => functionalCustomElement(NPagers),
  "n-pager": () => functionalCustomElement(NPager),
  "n-nav-accordion": () => functionalCustomElement(NNavAccordion),
  "n-error": () => functionalCustomElement(NError),
  "n-code-block": () => functionalCustomElement(NCodeBlock),
  "n-breadcrumb": () => functionalCustomElement(NBreadcrumb),
  "n-badge": () => functionalCustomElement(NBadge),
  "n-option": () => functionalCustomElement(NOption),
  "n-select": () => functionalCustomElement(NSelect),
  "n-li": () => functionalCustomElement(NLi),
  "n-ul": () => functionalCustomElement(NUl),
  "n-input": () => functionalCustomElement(NInput),
  "n-header": () => functionalCustomElement(NHeader),
  "n-h6": () => functionalCustomElement(NH6),
  "n-h5": () => functionalCustomElement(NH5),
  "n-h4": () => functionalCustomElement(NH4),
  "n-h3": () => functionalCustomElement(NH3),
  "n-h2": () => functionalCustomElement(NH2),
  "n-h1": () => functionalCustomElement(NH1),
  "n-button": () => functionalCustomElement(NButton),
};

export {
  CustomElements as default,
  CustomElements,
};
