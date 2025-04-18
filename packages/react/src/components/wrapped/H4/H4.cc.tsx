import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NH4 as Class, type NH4Type, NH4Util } from "@nuco/core/components/n-h4";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const H4 = (props: Props<ElementType, NH4Type["Props"], NH4Type["Emit"]>) => {
  const { getHtmlHast, style } = NH4Util;

  return (
    <NucoWrapper<"n-h4", ElementType, NH4Type["Props"], NH4Type["Emit"]>
      elementName="n-h4"
      elementClass={Class}
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};