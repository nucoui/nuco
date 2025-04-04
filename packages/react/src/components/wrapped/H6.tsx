import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NH6, type NH6Type, NH6Util } from "@nuco/core/components/n-h6";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const H6 = (props: Props<ElementType, NH6Type["Props"], NH6Type["Emit"]>) => {
  const { getHtmlHast, style } = NH6Util;

  return (
    <NucoWrapper<"n-h6", ElementType, NH6Type["Props"], NH6Type["Emit"]>
      elementName="n-h6"
      elementClass={NH6}
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
