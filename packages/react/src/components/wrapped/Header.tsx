import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { type NHeaderType, NHeaderUtil } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Header = (props: Props<ElementType, NHeaderType["Props"], NHeaderType["Emit"]>) => {
  const { getHtmlString, style } = NHeaderUtil;

  return (
    <NucoWrapper<ElementType, NHeaderType["Props"], NHeaderType["Emit"]>
      elementName="n-header"
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
