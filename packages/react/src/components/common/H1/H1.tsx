import type { Props } from "@/components/NucoWrapper";
import type { NH1Emits } from "@nuco/core";
import { NucoWrapper } from "@/components/NucoWrapper";

type ElementType = HTMLHeadingElement;

// eslint-disable-next-line ts/no-empty-object-type
export const H1 = (props: Props<ElementType, {}, NH1Emits>) => {
  // eslint-disable-next-line ts/no-empty-object-type
  return NucoWrapper<ElementType, {}, NH1Emits>({ elementName: "n-h1", props });
};
