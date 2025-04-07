import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NAnchor as Class, type NAnchorType, NAnchorUtil } from "@nuco/core/components/n-anchor";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Anchor = (props: Props<ElementType, NAnchorType["Props"], NAnchorType["Emit"]>) => {
  const { getHtmlHast, style } = NAnchorUtil;

  return (
    <NucoWrapper<"n-anchor", ElementType, NAnchorType["Props"], NAnchorType["Emit"]>
      elementName="n-anchor"
      elementClass={Class}
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};