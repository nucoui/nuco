import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NLiType, NLiUtil } from "@nuco/core/components/n-li";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Li = (props: Props<ElementType, NLiType["Props"], NLiType["Emit"]>) => {
  const { getHtmlHast, style } = NLiUtil;

  return (
    <NucoServerWrapper<ElementType, NLiType["Props"], NLiType["Emit"]>
      elementName="n-li"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
