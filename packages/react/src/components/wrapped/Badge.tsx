import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { type NBadgeType, NBadgeUtil } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Badge = (props: Props<ElementType, NBadgeType["Props"], NBadgeType["Emit"]>) => {
  const { getHtmlString, style } = NBadgeUtil;

  return (
    <NucoWrapper<ElementType, NBadgeType["Props"], NBadgeType["Emit"]>
      elementName="n-badge"
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
