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

const Elements = {
  "n-option": NOption,
  "n-select": NSelect,
  "n-li": NLi,
  "n-ul": NUl,
  "n-input": NInput,
  "n-header": NHeader,
  "n-h6": NH6,
  "n-h5": NH5,
  "n-h4": NH4,
  "n-h3": NH3,
  "n-h2": NH2,
  "n-h1": NH1,
  "n-button": NButton,
};

export {
  Elements as default,
  Elements,
};
