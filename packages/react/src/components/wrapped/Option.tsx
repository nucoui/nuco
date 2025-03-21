import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { type NOptionType, NOptionUtil } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Option = (props: Props<ElementType, NOptionType["Props"], NOptionType["Emit"]>) => {
  const { getHtmlString, style } = NOptionUtil;

  return (
    <NucoWrapper<ElementType, NOptionType["Props"], NOptionType["Emit"]>
      elementName="n-option"
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
