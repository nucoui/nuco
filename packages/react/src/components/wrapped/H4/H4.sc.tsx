import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NH4Type, NH4Util } from "@nuco/core/components/n-h4";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const H4 = (props: Props<ElementType, NH4Type["Props"], NH4Type["Emit"]>) => {
  const { getHtmlHast, style } = NH4Util;

  return (
    <NucoServerWrapper<ElementType, NH4Type["Props"], NH4Type["Emit"]>
      elementName="n-h4"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
