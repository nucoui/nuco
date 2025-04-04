import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NNavAccordion, type NNavAccordionType, NNavAccordionUtil } from "@nuco/core/components/composite/n-nav-accordion";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const NavAccordion = (props: Props<ElementType, NNavAccordionType["Props"], NNavAccordionType["Emit"]>) => {
  const { getHtmlHast, style } = NNavAccordionUtil;

  return (
    <NucoWrapper<"n-nav-accordion", ElementType, NNavAccordionType["Props"], NNavAccordionType["Emit"]>
      elementName="n-nav-accordion"
      elementClass={NNavAccordion}
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
