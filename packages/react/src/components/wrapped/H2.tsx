import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { type NH2Type, NH2Util } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const H2 = (props: Props<ElementType, NH2Type["Props"], NH2Type["Emit"]>) => {
  const { getHtmlString, style } = NH2Util;

  return (
    <NucoWrapper<ElementType, NH2Type["Props"], NH2Type["Emit"]>
      elementName="n-h2"
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
