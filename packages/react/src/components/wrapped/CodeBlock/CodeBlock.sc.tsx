import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NCodeBlockType, NCodeBlockUtil } from "@nuco/core/components/n-code-block";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const CodeBlock = (props: Props<ElementType, NCodeBlockType["Props"], NCodeBlockType["Emit"]>) => {
  const { getHtmlHast, style } = NCodeBlockUtil;

  return (
    <NucoServerWrapper<ElementType, NCodeBlockType["Props"], NCodeBlockType["Emit"]>
      elementName="n-code-block"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
