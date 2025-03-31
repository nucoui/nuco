import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NH3, type NH3Type, NH3Util } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const H3 = (props: Props<ElementType, NH3Type["Props"], NH3Type["Emit"]>) => {
  const { getHtmlString, style } = NH3Util;

  return (
    <NucoWrapper<"n-h3", ElementType, NH3Type["Props"], NH3Type["Emit"]>
      elementName="n-h3"
      elementClass={NH3}
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
