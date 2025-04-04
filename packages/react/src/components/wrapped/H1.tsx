import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NH1, type NH1Type, NH1Util } from "@nuco/core/components/common/n-h1";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const H1 = (props: Props<ElementType, NH1Type["Props"], NH1Type["Emit"]>) => {
  const { getHtmlHast, style } = NH1Util;

  return (
    <NucoWrapper<"n-h1", ElementType, NH1Type["Props"], NH1Type["Emit"]>
      elementName="n-h1"
      elementClass={NH1}
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
