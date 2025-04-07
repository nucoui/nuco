import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NOption as Class, type NOptionType, NOptionUtil } from "@nuco/core/components/n-option";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Option = (props: Props<ElementType, NOptionType["Props"], NOptionType["Emit"]>) => {
  const { getHtmlHast, style } = NOptionUtil;

  return (
    <NucoWrapper<"n-option", ElementType, NOptionType["Props"], NOptionType["Emit"]>
      elementName="n-option"
      elementClass={Class}
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};