import type { Props } from "@/types/Props";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";
import { type NBreadcrumbType, NBreadcrumbUtil } from "@nuco/core/components/n-breadcrumb";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Breadcrumb = (props: Props<ElementType, NBreadcrumbType["Props"], NBreadcrumbType["Emit"]>) => {
  const { getHtmlHast, style } = NBreadcrumbUtil;

  return (
    <NucoServerWrapper<ElementType, NBreadcrumbType["Props"], NBreadcrumbType["Emit"]>
      elementName="n-breadcrumb"
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};
