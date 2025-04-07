import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NHeader as Class, type NHeaderType, NHeaderUtil } from "@nuco/core/components/n-header";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Header = (props: Props<ElementType, NHeaderType["Props"], NHeaderType["Emit"]>) => {
  const { getHtmlHast, style } = NHeaderUtil;

  return (
    <NucoWrapper<"n-header", ElementType, NHeaderType["Props"], NHeaderType["Emit"]>
      elementName="n-header"
      elementClass={Class}
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};