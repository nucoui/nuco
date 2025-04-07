import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NSelectType, NSelectUtil } from "@nuco/core/components/n-select";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Select = (props: Props<ElementType, NSelectType["Props"], NSelectType["Emit"]>) => {
  const { getHtmlHast, style } = NSelectUtil;

  return (
    <NucoServerWrapper<ElementType, NSelectType["Props"], NSelectType["Emit"]>
      elementName="n-select"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
