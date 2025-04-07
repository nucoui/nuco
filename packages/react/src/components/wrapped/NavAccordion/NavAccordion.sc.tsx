import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NNavAccordionType, NNavAccordionUtil } from "@nuco/core/components/n-nav-accordion";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const NavAccordion = (props: Props<ElementType, NNavAccordionType["Props"], NNavAccordionType["Emit"]>) => {
  const { getHtmlHast, style } = NNavAccordionUtil;

  return (
    <NucoServerWrapper<ElementType, NNavAccordionType["Props"], NNavAccordionType["Emit"]>
      elementName="n-nav-accordion"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
