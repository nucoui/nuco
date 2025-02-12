"use client";

import type { Props } from "@/components/NucoWrapper";
import type { NBreadcrumbEmits, NBreadcrumbProps } from "@nuco/core";
import { NucoWrapper } from "@/components/NucoWrapper";

type ElementType = HTMLDivElement;

export const Breadcrumb = (props: Props<ElementType, NBreadcrumbProps, NBreadcrumbEmits>) => {
  return NucoWrapper<ElementType, NBreadcrumbProps, NBreadcrumbEmits>({ elementName: "n-breadcrumb", props });
};
