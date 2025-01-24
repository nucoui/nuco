import type { Props } from "@/components/NucoWrapper";
import type { NH5Emits } from "@nuco/core";
import { NucoWrapper } from "@/components/NucoWrapper";

type ElementType = HTMLHeadingElement;

// eslint-disable-next-line ts/no-empty-object-type
export const H5 = (props: Props<ElementType, {}, NH5Emits>) => {
  // eslint-disable-next-line ts/no-empty-object-type
  return NucoWrapper<ElementType, {}, NH5Emits>({ elementName: "n-h5", props });
};
