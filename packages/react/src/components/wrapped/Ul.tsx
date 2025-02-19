import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { type NUlType, NUlUtil } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Ul = (props: Props<ElementType, NUlType["Props"], NUlType["Emit"]>) => {
  const { getHtmlString, style } = NUlUtil;

  return (
    <NucoWrapper<ElementType, NUlType["Props"], NUlType["Emit"]>
      elementName="n-ul"
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
