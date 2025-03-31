import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NLi, type NLiType, NLiUtil } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Li = (props: Props<ElementType, NLiType["Props"], NLiType["Emit"]>) => {
  const { getHtmlString, style } = NLiUtil;

  return (
    <NucoWrapper<"n-li", ElementType, NLiType["Props"], NLiType["Emit"]>
      elementName="n-li"
      elementClass={NLi}
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
