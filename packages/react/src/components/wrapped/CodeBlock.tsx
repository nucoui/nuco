import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NCodeBlock, type NCodeBlockType, NCodeBlockUtil } from "@nuco/core/components/composite/n-code-block";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const CodeBlock = (props: Props<ElementType, NCodeBlockType["Props"], NCodeBlockType["Emit"]>) => {
  const { getHtmlString, style } = NCodeBlockUtil;

  return (
    <NucoWrapper<"n-code-block", ElementType, NCodeBlockType["Props"], NCodeBlockType["Emit"]>
      elementName="n-code-block"
      elementClass={NCodeBlock}
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
