import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NErrorType, NErrorUtil } from "@nuco/core/components/n-error";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Error = (props: Props<ElementType, NErrorType["Props"], NErrorType["Emit"]>) => {
  const { getHtmlHast, style } = NErrorUtil;

  return (
    <NucoServerWrapper<ElementType, NErrorType["Props"], NErrorType["Emit"]>
      elementName="n-error"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
