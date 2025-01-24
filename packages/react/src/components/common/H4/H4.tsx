import type { Props } from "@/components/NucoWrapper";
import type { NH4Emits } from "@nuco/core";
import { NucoWrapper } from "@/components/NucoWrapper";

type ElementType = HTMLHeadingElement;

// eslint-disable-next-line ts/no-empty-object-type
export const H4 = (props: Props<ElementType, {}, NH4Emits>) => {
  // eslint-disable-next-line ts/no-empty-object-type
  return NucoWrapper<ElementType, {}, NH4Emits>({ elementName: "n-h4", props });
};
