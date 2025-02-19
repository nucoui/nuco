import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { type NLiType, NLiUtil } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Li = (props: Props<ElementType, NLiType["Props"], NLiType["Emit"]>) => {
  const { getHtmlString, style } = NLiUtil;

  return (
    <NucoWrapper<ElementType, NLiType["Props"], NLiType["Emit"]>
      elementName="n-li"
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
