import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { type NH5Type, NH5Util } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const H5 = (props: Props<ElementType, NH5Type["Props"], NH5Type["Emit"]>) => {
  const { getHtmlString, style } = NH5Util;

  return (
    <NucoWrapper<ElementType, NH5Type["Props"], NH5Type["Emit"]>
      elementName="n-h5"
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
