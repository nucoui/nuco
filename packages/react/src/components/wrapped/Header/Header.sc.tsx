import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NHeaderType, NHeaderUtil } from "@nuco/core/components/n-header";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Header = (props: Props<ElementType, NHeaderType["Props"], NHeaderType["Emit"]>) => {
  const { getHtmlHast, style } = NHeaderUtil;

  return (
    <NucoServerWrapper<ElementType, NHeaderType["Props"], NHeaderType["Emit"]>
      elementName="n-header"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
