import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NH3Type, NH3Util } from "@nuco/core/components/n-h3";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const H3 = (props: Props<ElementType, NH3Type["Props"], NH3Type["Emit"]>) => {
  const { getHtmlHast, style } = NH3Util;

  return (
    <NucoServerWrapper<ElementType, NH3Type["Props"], NH3Type["Emit"]>
      elementName="n-h3"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
