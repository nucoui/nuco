import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NError, type NErrorType, NErrorUtil } from "@nuco/core/components/composite/n-error";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Error = (props: Props<ElementType, NErrorType["Props"], NErrorType["Emit"]>) => {
  const { getHtmlString, style } = NErrorUtil;

  return (
    <NucoWrapper<"n-error", ElementType, NErrorType["Props"], NErrorType["Emit"]>
      elementName="n-error"
      elementClass={NError}
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
