import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NUlType, NUlUtil } from "@nuco/core/components/n-ul";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Ul = (props: Props<ElementType, NUlType["Props"], NUlType["Emit"]>) => {
  const { getHtmlHast, style } = NUlUtil;

  return (
    <NucoServerWrapper<ElementType, NUlType["Props"], NUlType["Emit"]>
      elementName="n-ul"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
