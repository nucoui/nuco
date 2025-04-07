import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NNavAccordion as Class, type NNavAccordionType, NNavAccordionUtil } from "@nuco/core/components/n-nav-accordion";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const NavAccordion = (props: Props<ElementType, NNavAccordionType["Props"], NNavAccordionType["Emit"]>) => {
  const { getHtmlHast, style } = NNavAccordionUtil;

  return (
    <NucoWrapper<"n-nav-accordion", ElementType, NNavAccordionType["Props"], NNavAccordionType["Emit"]>
      elementName="n-nav-accordion"
      elementClass={Class}
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};