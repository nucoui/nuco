import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { type NH6Type, NH6Util } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const H6 = (props: Props<ElementType, NH6Type["Props"], NH6Type["Emit"]>) => {
  const { getHtmlString, style } = NH6Util;

  return (
    <NucoWrapper<ElementType, NH6Type["Props"], NH6Type["Emit"]>
      elementName="n-h6"
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
