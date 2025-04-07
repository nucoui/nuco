import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NButtonType, NButtonUtil } from "@nuco/core/components/n-button";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Button = (props: Props<ElementType, NButtonType["Props"], NButtonType["Emit"]>) => {
  const { getHtmlHast, style } = NButtonUtil;

  return (
    <NucoServerWrapper<ElementType, NButtonType["Props"], NButtonType["Emit"]>
      elementName="n-button"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
