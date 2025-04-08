import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NPagersType, NPagersUtil } from "@nuco/core/components/n-pagers";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Pagers = (props: Props<ElementType, NPagersType["Props"], NPagersType["Emit"]>) => {
  const { getHtmlHast, style } = NPagersUtil;

  return (
    <NucoServerWrapper<ElementType, NPagersType["Props"], NPagersType["Emit"]>
      elementName="n-pagers"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
