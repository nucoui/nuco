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
import { type ComponentProps, functionalDeclarativeCustomElement } from "chatora";

type DeclarativeElementFunction<T> = (props: ComponentProps<T>) => ReturnType<typeof functionalDeclarativeCustomElement>;

type DeclarativeCustomElementsType = {
  "n-divider": DeclarativeElementFunction<typeof NDivider>;
  "n-anchor": DeclarativeElementFunction<typeof NAnchor>;
  "n-pagers": DeclarativeElementFunction<typeof NPagers>;
  "n-pager": DeclarativeElementFunction<typeof NPager>;
  "n-nav-accordion": DeclarativeElementFunction<typeof NNavAccordion>;
  "n-error": DeclarativeElementFunction<typeof NError>;
  "n-code-block": DeclarativeElementFunction<typeof NCodeBlock>;
  "n-breadcrumb": DeclarativeElementFunction<typeof NBreadcrumb>;
  "n-badge": DeclarativeElementFunction<typeof NBadge>;
  "n-option": DeclarativeElementFunction<typeof NOption>;
  "n-select": DeclarativeElementFunction<typeof NSelect>;
  "n-li": DeclarativeElementFunction<typeof NLi>;
  "n-ul": DeclarativeElementFunction<typeof NUl>;
  "n-input": DeclarativeElementFunction<typeof NInput>;
  "n-header": DeclarativeElementFunction<typeof NHeader>;
  "n-h6": DeclarativeElementFunction<typeof NH6>;
  "n-h5": DeclarativeElementFunction<typeof NH5>;
  "n-h4": DeclarativeElementFunction<typeof NH4>;
  "n-h3": DeclarativeElementFunction<typeof NH3>;
  "n-h2": DeclarativeElementFunction<typeof NH2>;
  "n-h1": DeclarativeElementFunction<typeof NH1>;
  "n-button": DeclarativeElementFunction<typeof NButton>;
};

const DeclarativeCustomElements: DeclarativeCustomElementsType = {
  "n-divider": (props: ComponentProps<typeof NDivider>) => functionalDeclarativeCustomElement(NDivider, { props }),
  "n-anchor": (props: ComponentProps<typeof NAnchor>) => functionalDeclarativeCustomElement(NAnchor, { props }),
  "n-pagers": (props: ComponentProps<typeof NPagers>) => functionalDeclarativeCustomElement(NPagers, { props }),
  "n-pager": (props: ComponentProps<typeof NPager>) => functionalDeclarativeCustomElement(NPager, { props }),
  "n-nav-accordion": (props: ComponentProps<typeof NNavAccordion>) => functionalDeclarativeCustomElement(NNavAccordion, { props }),
  "n-error": (props: ComponentProps<typeof NError>) => functionalDeclarativeCustomElement(NError, { props }),
  "n-code-block": (props: ComponentProps<typeof NCodeBlock>) => functionalDeclarativeCustomElement(NCodeBlock, { props }),
  "n-breadcrumb": (props: ComponentProps<typeof NBreadcrumb>) => functionalDeclarativeCustomElement(NBreadcrumb, { props }),
  "n-badge": (props: ComponentProps<typeof NBadge>) => functionalDeclarativeCustomElement(NBadge, { props }),
  "n-option": (props: ComponentProps<typeof NOption>) => functionalDeclarativeCustomElement(NOption, { props }),
  "n-select": (props: ComponentProps<typeof NSelect>) => functionalDeclarativeCustomElement(NSelect, { props }),
  "n-li": (props: ComponentProps<typeof NLi>) => functionalDeclarativeCustomElement(NLi, { props }),
  "n-ul": (props: ComponentProps<typeof NUl>) => functionalDeclarativeCustomElement(NUl, { props }),
  "n-input": (props: ComponentProps<typeof NInput>) => functionalDeclarativeCustomElement(NInput, { props }),
  "n-header": (props: ComponentProps<typeof NHeader>) => functionalDeclarativeCustomElement(NHeader, { props }),
  "n-h6": (props: ComponentProps<typeof NH6>) => functionalDeclarativeCustomElement(NH6, { props }),
  "n-h5": (props: ComponentProps<typeof NH5>) => functionalDeclarativeCustomElement(NH5, { props }),
  "n-h4": (props: ComponentProps<typeof NH4>) => functionalDeclarativeCustomElement(NH4, { props }),
  "n-h3": (props: ComponentProps<typeof NH3>) => functionalDeclarativeCustomElement(NH3, { props }),
  "n-h2": (props: ComponentProps<typeof NH2>) => functionalDeclarativeCustomElement(NH2, { props }),
  "n-h1": (props: ComponentProps<typeof NH1>) => functionalDeclarativeCustomElement(NH1, { props }),
  "n-button": (props: ComponentProps<typeof NButton>) => functionalDeclarativeCustomElement(NButton, { props }),
};

export {
  DeclarativeCustomElements as default,
  DeclarativeCustomElements,
};

export type { DeclarativeCustomElementsType };
