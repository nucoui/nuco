import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { type NSelectType, NSelectUtil } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLSelectElement;

export const Select = (props: Props<ElementType, NSelectType["Props"], NSelectType["Emit"]>) => {
  const { getHtmlString, style } = NSelectUtil;

  return (
    <NucoWrapper<ElementType, NSelectType["Props"], NSelectType["Emit"]>
      elementName="n-select"
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
