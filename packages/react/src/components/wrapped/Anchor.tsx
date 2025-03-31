import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NAnchor, type NAnchorType, NAnchorUtil } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Anchor = (props: Props<ElementType, NAnchorType["Props"], NAnchorType["Emit"]>) => {
  const { getHtmlString, style } = NAnchorUtil;

  return (
    <NucoWrapper<"n-anchor", ElementType, NAnchorType["Props"], NAnchorType["Emit"]>
      elementName="n-anchor"
      elementClass={NAnchor}
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
