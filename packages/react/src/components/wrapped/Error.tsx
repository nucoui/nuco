import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { type NErrorType, NErrorUtil } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Error = (props: Props<ElementType, NErrorType["Props"], NErrorType["Emit"]>) => {
  const { getHtmlString, style } = NErrorUtil;

  return (
    <NucoWrapper<ElementType, NErrorType["Props"], NErrorType["Emit"]>
      elementName="n-error"
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
