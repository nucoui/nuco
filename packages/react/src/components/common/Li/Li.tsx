"use client";

import type { Props } from "@/components/NucoWrapper";
import type { NLiEmits, NLiProps } from "@nuco/core";
import { NucoWrapper } from "@/components/NucoWrapper";

type ElementType = HTMLLIElement;

export const Li = (props: Props<ElementType, NLiProps, NLiEmits>) => {
  return NucoWrapper<ElementType, NLiProps, NLiEmits>({ elementName: "n-li", props });
};
