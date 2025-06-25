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
import { functionalCustomElement } from "chatora";

const CustomElements = {
  "n-option": functionalCustomElement(NOption),
  "n-select": functionalCustomElement(NSelect),
  "n-li": functionalCustomElement(NLi),
  "n-ul": functionalCustomElement(NUl),
  "n-input": functionalCustomElement(NInput),
  "n-header": functionalCustomElement(NHeader),
  "n-h6": functionalCustomElement(NH6),
  "n-h5": functionalCustomElement(NH5),
  "n-h4": functionalCustomElement(NH4),
  "n-h3": functionalCustomElement(NH3),
  "n-h2": functionalCustomElement(NH2),
  "n-h1": functionalCustomElement(NH1),
  "n-button": functionalCustomElement(NButton),
};

export {
  CustomElements as default,
  CustomElements,
};
