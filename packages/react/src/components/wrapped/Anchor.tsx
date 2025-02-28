import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { type NAnchorType, NAnchorUtil } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Anchor = (props: Props<ElementType, NAnchorType["Props"], NAnchorType["Emit"]>) => {
  const { getHtmlString, style } = NAnchorUtil;

  return (
    <NucoWrapper<ElementType, NAnchorType["Props"], NAnchorType["Emit"]>
      elementName="n-anchor"
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
