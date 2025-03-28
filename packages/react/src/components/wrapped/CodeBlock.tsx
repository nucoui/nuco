import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { type NCodeBlockType, NCodeBlockUtil } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const CodeBlock = (props: Props<ElementType, NCodeBlockType["Props"], NCodeBlockType["Emit"]>) => {
  const { getHtmlString, style } = NCodeBlockUtil;

  return (
    <NucoWrapper<ElementType, NCodeBlockType["Props"], NCodeBlockType["Emit"]>
      elementName="n-code-block"
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
