import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NH6Type, NH6Util } from "@nuco/core/components/n-h6";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const H6 = (props: Props<ElementType, NH6Type["Props"], NH6Type["Emit"]>) => {
  const { getHtmlHast, style } = NH6Util;

  return (
    <NucoServerWrapper<ElementType, NH6Type["Props"], NH6Type["Emit"]>
      elementName="n-h6"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
