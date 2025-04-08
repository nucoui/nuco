import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NPagerType, NPagerUtil } from "@nuco/core/components/n-pager";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Pager = (props: Props<ElementType, NPagerType["Props"], NPagerType["Emit"]>) => {
  const { getHtmlHast, style } = NPagerUtil;

  return (
    <NucoServerWrapper<ElementType, NPagerType["Props"], NPagerType["Emit"]>
      elementName="n-pager"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
