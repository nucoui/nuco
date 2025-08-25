import { genDSDNAnchor } from "@/components/NAnchor/NAnchor";
import { genDSDNBadge } from "@/components/NBadge/NBadge";
import { genDSDNBreadcrumb } from "@/components/NBreadcrumb/NBreadcrumb";
import { genDSDNButton } from "@/components/NButton/NButton";
import { genDSDNCodeBlock } from "@/components/NCodeBlock/NCodeBlock";
import { genDSDNDivider } from "@/components/NDivider/NDivider";
import { genDSDNError } from "@/components/NError/NError";
import { genDSDNH1 } from "@/components/NH1/NH1";
import { genDSDNH2 } from "@/components/NH2/NH2";
import { genDSDNH3 } from "@/components/NH3/NH3";
import { genDSDNH4 } from "@/components/NH4/NH4";
import { genDSDNH5 } from "@/components/NH5/NH5";
import { genDSDNH6 } from "@/components/NH6/NH6";
import { genDSDNHeader } from "@/components/NHeader/NHeader";
import { genDSDNInput } from "@/components/NInput/NInput";
import { genDSDNLi } from "@/components/NLi/NLi";
import { genDSDNNavAccordion } from "@/components/NNavAccordion/NNavAccordion";
import { genDSDNOption } from "@/components/NOption/NOption";
import { genDSDNPager } from "@/components/NPager/NPager";
import { genDSDNPagers } from "@/components/NPagers/NPagers";
import { genDSDNSelect } from "@/components/NSelect/NSelect";
import { genDSDNUl } from "@/components/NUl/NUl";

type DeclarativeCustomElementsType = {
  "n-divider": typeof genDSDNDivider;
  "n-anchor": typeof genDSDNAnchor;
  "n-pagers": typeof genDSDNPagers;
  "n-pager": typeof genDSDNPager;
  "n-nav-accordion": typeof genDSDNNavAccordion;
  "n-error": typeof genDSDNError;
  "n-code-block": typeof genDSDNCodeBlock;
  "n-breadcrumb": typeof genDSDNBreadcrumb;
  "n-badge": typeof genDSDNBadge;
  "n-option": typeof genDSDNOption;
  "n-select": typeof genDSDNSelect;
  "n-li": typeof genDSDNLi;
  "n-ul": typeof genDSDNUl;
  "n-input": typeof genDSDNInput;
  "n-header": typeof genDSDNHeader;
  "n-h6": typeof genDSDNH6;
  "n-h5": typeof genDSDNH5;
  "n-h4": typeof genDSDNH4;
  "n-h3": typeof genDSDNH3;
  "n-h2": typeof genDSDNH2;
  "n-h1": typeof genDSDNH1;
  "n-button": typeof genDSDNButton;
};

const DeclarativeCustomElements: DeclarativeCustomElementsType = {
  "n-divider": props => genDSDNDivider(props),
  "n-anchor": props => genDSDNAnchor(props),
  "n-pagers": props => genDSDNPagers(props),
  "n-pager": props => genDSDNPager(props),
  "n-nav-accordion": props => genDSDNNavAccordion(props),
  "n-error": props => genDSDNError(props),
  "n-code-block": props => genDSDNCodeBlock(props),
  "n-breadcrumb": props => genDSDNBreadcrumb(props),
  "n-badge": props => genDSDNBadge(props),
  "n-option": props => genDSDNOption(props),
  "n-select": props => genDSDNSelect(props),
  "n-li": props => genDSDNLi(props),
  "n-ul": props => genDSDNUl(props),
  "n-input": props => genDSDNInput(props),
  "n-header": props => genDSDNHeader(props),
  "n-h6": props => genDSDNH6(props),
  "n-h5": props => genDSDNH5(props),
  "n-h4": props => genDSDNH4(props),
  "n-h3": props => genDSDNH3(props),
  "n-h2": props => genDSDNH2(props),
  "n-h1": props => genDSDNH1(props),
  "n-button": props => genDSDNButton(props),
};

export {
  DeclarativeCustomElements as default,
  DeclarativeCustomElements,
};

export type { DeclarativeCustomElementsType };
