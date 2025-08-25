import { genSDNAnchor } from "@/components/NAnchor/NAnchor";
import { genSDNBadge } from "@/components/NBadge/NBadge";
import { genSDNBreadcrumb } from "@/components/NBreadcrumb/NBreadcrumb";
import { genSDNButton } from "@/components/NButton/NButton";
import { genSDNCodeBlock } from "@/components/NCodeBlock/NCodeBlock";
import { genSDNDivider } from "@/components/NDivider/NDivider";
import { genSDNError } from "@/components/NError/NError";
import { genSDNH1 } from "@/components/NH1/NH1";
import { genSDNH2 } from "@/components/NH2/NH2";
import { genSDNH3 } from "@/components/NH3/NH3";
import { genSDNH4 } from "@/components/NH4/NH4";
import { genSDNH5 } from "@/components/NH5/NH5";
import { genSDNH6 } from "@/components/NH6/NH6";
import { genSDNHeader } from "@/components/NHeader/NHeader";
import { genSDNInput } from "@/components/NInput/NInput";
import { genSDNLi } from "@/components/NLi/NLi";
import { genSDNNavAccordion } from "@/components/NNavAccordion/NNavAccordion";
import { genSDNOption } from "@/components/NOption/NOption";
import { genSDNPager } from "@/components/NPager/NPager";
import { genSDNPagers } from "@/components/NPagers/NPagers";
import { genSDNSelect } from "@/components/NSelect/NSelect";
import { genSDNUl } from "@/components/NUl/NUl";

const CustomElements = {
  "n-divider": () => genSDNDivider(),
  "n-anchor": () => genSDNAnchor(),
  "n-pagers": () => genSDNPagers(),
  "n-pager": () => genSDNPager(),
  "n-nav-accordion": () => genSDNNavAccordion(),
  "n-error": () => genSDNError(),
  "n-code-block": () => genSDNCodeBlock(),
  "n-breadcrumb": () => genSDNBreadcrumb(),
  "n-badge": () => genSDNBadge(),
  "n-option": () => genSDNOption(),
  "n-select": () => genSDNSelect(),
  "n-li": () => genSDNLi(),
  "n-ul": () => genSDNUl(),
  "n-input": () => genSDNInput(),
  "n-header": () => genSDNHeader(),
  "n-h6": () => genSDNH6(),
  "n-h5": () => genSDNH5(),
  "n-h4": () => genSDNH4(),
  "n-h3": () => genSDNH3(),
  "n-h2": () => genSDNH2(),
  "n-h1": () => genSDNH1(),
  "n-button": () => genSDNButton(),
};

export {
  CustomElements as default,
  CustomElements,
};
