import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NBadge, type NBadgeType, NBadgeUtil } from "@nuco/core/components/composite/n-badge";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Badge = (props: Props<ElementType, NBadgeType["Props"], NBadgeType["Emit"]>) => {
  const { getHtmlHast, style } = NBadgeUtil;

  return (
    <NucoWrapper<"n-badge", ElementType, NBadgeType["Props"], NBadgeType["Emit"]>
      elementName="n-badge"
      elementClass={NBadge}
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
