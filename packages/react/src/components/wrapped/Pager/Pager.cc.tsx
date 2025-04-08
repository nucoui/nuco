import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NPager as Class, type NPagerType, NPagerUtil } from "@nuco/core/components/n-pager";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Pager = (props: Props<ElementType, NPagerType["Props"], NPagerType["Emit"]>) => {
  const { getHtmlHast, style } = NPagerUtil;

  return (
    <NucoWrapper<"n-pager", ElementType, NPagerType["Props"], NPagerType["Emit"]>
      elementName="n-pager"
      elementClass={Class}
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};