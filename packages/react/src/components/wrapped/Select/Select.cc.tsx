import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NSelect as Class, type NSelectType, NSelectUtil } from "@nuco/core/components/n-select";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Select = (props: Props<ElementType, NSelectType["Props"], NSelectType["Emit"]>) => {
  const { getHtmlHast, style } = NSelectUtil;

  return (
    <NucoWrapper<"n-select", ElementType, NSelectType["Props"], NSelectType["Emit"]>
      elementName="n-select"
      elementClass={Class}
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};