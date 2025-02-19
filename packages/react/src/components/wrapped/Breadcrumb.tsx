import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { type NBreadcrumbType, NBreadcrumbUtil } from "@nuco/core";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Breadcrumb = (props: Props<ElementType, NBreadcrumbType["Props"], NBreadcrumbType["Emit"]>) => {
  const { getHtmlString, style } = NBreadcrumbUtil;

  return (
    <NucoWrapper<ElementType, NBreadcrumbType["Props"], NBreadcrumbType["Emit"]>
      elementName="n-breadcrumb"
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
