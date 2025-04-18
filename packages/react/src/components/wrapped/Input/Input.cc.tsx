import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NInput as Class, type NInputType, NInputUtil } from "@nuco/core/components/n-input";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Input = (props: Props<ElementType, NInputType["Props"], NInputType["Emit"]>) => {
  const { getHtmlHast, style } = NInputUtil;

  return (
    <NucoWrapper<"n-input", ElementType, NInputType["Props"], NInputType["Emit"]>
      elementName="n-input"
      elementClass={Class}
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};