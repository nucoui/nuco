import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NDivider, type NDividerType, NDividerUtil } from "@nuco/core/components/n-divider";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Divider = (props: Props<ElementType, NDividerType["Props"], NDividerType["Emit"]>) => {
  const { getHtmlHast, style } = NDividerUtil;

  return (
    <NucoWrapper<"n-divider", ElementType, NDividerType["Props"], NDividerType["Emit"]>
      elementName="n-divider"
      elementClass={NDivider}
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
