import { NButton } from "@/components/NButton/NButton";
import { NH1 } from "@/components/NH1/NH1";
import { NH2 } from "@/components/NH2/NH2";
import { NH3 } from "@/components/NH3/NH3";
import { NH4 } from "@/components/NH4/NH4";
import { NH5 } from "@/components/NH5/NH5";
import { NH6 } from "@/components/NH6/NH6";
import { NHeader } from "@/components/NHeader/NHeader";
import { NInput } from "@/components/NInput/NInput";
import { NLi } from "@/components/NLi/NLi";
import { NOption } from "@/components/NOption/NOption";
import { NSelect } from "@/components/NSelect/NSelect";
import { NUl } from "@/components/NUl/NUl";
import { type ComponentProps, functionalDeclarativeCustomElement } from "chatora";

const DeclarativeCustomElements = {
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
