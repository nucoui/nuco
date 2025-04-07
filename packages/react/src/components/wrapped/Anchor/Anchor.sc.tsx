import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NAnchorType, NAnchorUtil } from "@nuco/core/components/n-anchor";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Anchor = (props: Props<ElementType, NAnchorType["Props"], NAnchorType["Emit"]>) => {
  const { getHtmlHast, style } = NAnchorUtil;

  return (
    <NucoServerWrapper<ElementType, NAnchorType["Props"], NAnchorType["Emit"]>
      elementName="n-anchor"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
