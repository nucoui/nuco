import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NButton as Class, type NButtonType, NButtonUtil } from "@nuco/core/components/n-button";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Button = (props: Props<ElementType, NButtonType["Props"], NButtonType["Emit"]>) => {
  const { getHtmlHast, style } = NButtonUtil;

  return (
    <NucoWrapper<"n-button", ElementType, NButtonType["Props"], NButtonType["Emit"]>
      elementName="n-button"
      elementClass={Class}
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};