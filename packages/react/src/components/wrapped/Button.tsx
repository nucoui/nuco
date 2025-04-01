import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NButton, type NButtonType, NButtonUtil } from "@nuco/core/components/common/n-button";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Button = (props: Props<ElementType, NButtonType["Props"], NButtonType["Emit"]>) => {
  const { getHtmlString, style } = NButtonUtil;

  return (
    <NucoWrapper<"n-button", ElementType, NButtonType["Props"], NButtonType["Emit"]>
      elementName="n-button"
      elementClass={NButton}
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
