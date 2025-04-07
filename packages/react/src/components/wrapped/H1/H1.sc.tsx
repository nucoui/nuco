import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NH1Type, NH1Util } from "@nuco/core/components/n-h1";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const H1 = (props: Props<ElementType, NH1Type["Props"], NH1Type["Emit"]>) => {
  const { getHtmlHast, style } = NH1Util;

  return (
    <NucoServerWrapper<ElementType, NH1Type["Props"], NH1Type["Emit"]>
      elementName="n-h1"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
