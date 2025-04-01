import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NUl, type NUlType, NUlUtil } from "@nuco/core/components/common/n-ul";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Ul = (props: Props<ElementType, NUlType["Props"], NUlType["Emit"]>) => {
  const { getHtmlString, style } = NUlUtil;

  return (
    <NucoWrapper<"n-ul", ElementType, NUlType["Props"], NUlType["Emit"]>
      elementName="n-ul"
      elementClass={NUl}
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
