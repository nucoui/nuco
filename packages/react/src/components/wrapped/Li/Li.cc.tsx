import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NLi as Class, type NLiType, NLiUtil } from "@nuco/core/components/n-li";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Li = (props: Props<ElementType, NLiType["Props"], NLiType["Emit"]>) => {
  const { getHtmlHast, style } = NLiUtil;

  return (
    <NucoWrapper<"n-li", ElementType, NLiType["Props"], NLiType["Emit"]>
      elementName="n-li"
      elementClass={Class}
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};