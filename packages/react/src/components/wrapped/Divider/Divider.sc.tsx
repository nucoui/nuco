import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NDividerType, NDividerUtil } from "@nuco/core/components/n-divider";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Divider = (props: Props<ElementType, NDividerType["Props"], NDividerType["Emit"]>) => {
  const { getHtmlHast, style } = NDividerUtil;

  return (
    <NucoServerWrapper<ElementType, NDividerType["Props"], NDividerType["Emit"]>
      elementName="n-divider"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
