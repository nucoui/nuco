import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NH2Type, NH2Util } from "@nuco/core/components/n-h2";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const H2 = (props: Props<ElementType, NH2Type["Props"], NH2Type["Emit"]>) => {
  const { getHtmlHast, style } = NH2Util;

  return (
    <NucoServerWrapper<ElementType, NH2Type["Props"], NH2Type["Emit"]>
      elementName="n-h2"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
