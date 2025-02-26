import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { type NNavAccordionType, NNavAccordionUtil } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const NavAccordion = (props: Props<ElementType, NNavAccordionType["Props"], NNavAccordionType["Emit"]>) => {
  const { getHtmlString, style } = NNavAccordionUtil;

  return (
    <NucoWrapper<ElementType, NNavAccordionType["Props"], NNavAccordionType["Emit"]>
      elementName="n-nav-accordion"
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
