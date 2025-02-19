import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { type NInputType, NInputUtil } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Input = (props: Props<ElementType, NInputType["Props"], NInputType["Emit"]>) => {
  const { getHtmlString, style } = NInputUtil;

  return (
    <NucoWrapper<ElementType, NInputType["Props"], NInputType["Emit"]>
      elementName="n-input"
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
