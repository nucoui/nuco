import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NPagers as Class, type NPagersType, NPagersUtil } from "@nuco/core/components/n-pagers";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Pagers = (props: Props<ElementType, NPagersType["Props"], NPagersType["Emit"]>) => {
  const { getHtmlHast, style } = NPagersUtil;

  return (
    <NucoWrapper<"n-pagers", ElementType, NPagersType["Props"], NPagersType["Emit"]>
      elementName="n-pagers"
      elementClass={Class}
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};