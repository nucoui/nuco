import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NH5, type NH5Type, NH5Util } from "@nuco/core/components/common/n-h5";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const H5 = (props: Props<ElementType, NH5Type["Props"], NH5Type["Emit"]>) => {
  const { getHtmlHast, style } = NH5Util;

  return (
    <NucoWrapper<"n-h5", ElementType, NH5Type["Props"], NH5Type["Emit"]>
      elementName="n-h5"
      elementClass={NH5}
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
