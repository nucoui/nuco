import type { Props } from "@/types/Props";
import { NucoWrapper } from "@/components/wrapper/NucoWrapper";
import { NBreadcrumb as Class, type NBreadcrumbType, NBreadcrumbUtil } from "@nuco/core/components/n-breadcrumb";

// Please change the type of ElementType to the correct type
type ElementType = HTMLElement;

export const Breadcrumb = (props: Props<ElementType, NBreadcrumbType["Props"], NBreadcrumbType["Emit"]>) => {
  const { getHtmlHast, style } = NBreadcrumbUtil;

  return (
    <NucoWrapper<"n-breadcrumb", ElementType, NBreadcrumbType["Props"], NBreadcrumbType["Emit"]>
      elementName="n-breadcrumb"
      elementClass={Class}
      getNElementHtml={getHtmlHast}
      style={style}
      props={props}
    />
  );
};