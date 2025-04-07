import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NInputType, NInputUtil } from "@nuco/core/components/n-input";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Input = (props: Props<ElementType, NInputType["Props"], NInputType["Emit"]>) => {
  const { getHtmlHast, style } = NInputUtil;

  return (
    <NucoServerWrapper<ElementType, NInputType["Props"], NInputType["Emit"]>
      elementName="n-input"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
