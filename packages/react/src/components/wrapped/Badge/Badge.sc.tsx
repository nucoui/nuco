import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NBadgeType, NBadgeUtil } from "@nuco/core/components/n-badge";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Badge = (props: Props<ElementType, NBadgeType["Props"], NBadgeType["Emit"]>) => {
  const { getHtmlHast, style } = NBadgeUtil;

  return (
    <NucoServerWrapper<ElementType, NBadgeType["Props"], NBadgeType["Emit"]>
      elementName="n-badge"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
