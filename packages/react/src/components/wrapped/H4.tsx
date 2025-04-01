import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NH4, type NH4Type, NH4Util } from "@nuco/core/components/common/n-h4";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const H4 = (props: Props<ElementType, NH4Type["Props"], NH4Type["Emit"]>) => {
  const { getHtmlString, style } = NH4Util;

  return (
    <NucoWrapper<"n-h4", ElementType, NH4Type["Props"], NH4Type["Emit"]>
      elementName="n-h4"
      elementClass={NH4}
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
