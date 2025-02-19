import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { type NButtonType, NButtonUtil } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Button = (props: Props<ElementType, NButtonType["Props"], NButtonType["Emit"]>) => {
  const { getHtmlString, style } = NButtonUtil;

  return (
    <NucoWrapper<ElementType, NButtonType["Props"], NButtonType["Emit"]>
      elementName="n-button"
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
