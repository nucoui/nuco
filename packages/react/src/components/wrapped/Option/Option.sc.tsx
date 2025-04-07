import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NOptionType, NOptionUtil } from "@nuco/core/components/n-option";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Option = (props: Props<ElementType, NOptionType["Props"], NOptionType["Emit"]>) => {
  const { getHtmlHast, style } = NOptionUtil;

  return (
    <NucoServerWrapper<ElementType, NOptionType["Props"], NOptionType["Emit"]>
      elementName="n-option"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
