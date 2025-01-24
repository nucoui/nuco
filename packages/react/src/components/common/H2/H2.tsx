import type { Props } from "@/components/NucoWrapper";
import type { NH2Emits } from "@nuco/core";
import { NucoWrapper } from "@/components/NucoWrapper";

type ElementType = HTMLHeadingElement;

// eslint-disable-next-line ts/no-empty-object-type
export const H2 = (props: Props<ElementType, {}, NH2Emits>) => {
  // eslint-disable-next-line ts/no-empty-object-type
  return NucoWrapper<ElementType, {}, NH2Emits>({ elementName: "n-h2", props });
};
