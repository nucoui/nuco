import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NSelect, type NSelectType, NSelectUtil } from "@nuco/core/components/common/n-select";

// Please change the type of ElementType to the correct type
type ElementType = HTMLSelectElement;

export const Select = (props: Props<ElementType, NSelectType["Props"], NSelectType["Emit"]>) => {
  const { getHtmlString, style } = NSelectUtil;

  return (
    <NucoWrapper<"n-select", ElementType, NSelectType["Props"], NSelectType["Emit"]>
      elementName="n-select"
      elementClass={NSelect}
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
