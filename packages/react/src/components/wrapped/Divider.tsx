import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { type NDividerType, NDividerUtil } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Divider = (props: Props<ElementType, NDividerType["Props"], NDividerType["Emit"]>) => {
  const { getHtmlString, style } = NDividerUtil;

  return (
    <NucoWrapper<ElementType, NDividerType["Props"], NDividerType["Emit"]>
      elementName="n-divider"
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
