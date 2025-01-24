import type { Props } from "@/components/NucoWrapper";
import type { NH6Emits } from "@nuco/core";
import { NucoWrapper } from "@/components/NucoWrapper";

type ElementType = HTMLHeadingElement;

// eslint-disable-next-line ts/no-empty-object-type
export const H6 = (props: Props<ElementType, {}, NH6Emits>) => {
  // eslint-disable-next-line ts/no-empty-object-type
  return NucoWrapper<ElementType, {}, NH6Emits>({ elementName: "n-h6", props });
};
