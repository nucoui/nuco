import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NBreadcrumb, type NBreadcrumbType, NBreadcrumbUtil } from "@nuco/core/components/composite/n-breadcrumb";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Breadcrumb = (props: Props<ElementType, NBreadcrumbType["Props"], NBreadcrumbType["Emit"]>) => {
  const { getHtmlString, style } = NBreadcrumbUtil;

  return (
    <NucoWrapper<"n-breadcrumb", ElementType, NBreadcrumbType["Props"], NBreadcrumbType["Emit"]>
      elementName="n-breadcrumb"
      elementClass={NBreadcrumb}
      getNElementHtml={getHtmlString}
      style={style}
      props={props}
    />
  );
};
