import type { NH5Emits } from "@nuco/core";
import type { Props } from "../NucoWrapper";
import { NucoWrapper } from "../NucoWrapper";

type ElementType = HTMLHeadingElement;

// eslint-disable-next-line ts/no-empty-object-type
export const H5 = (props: Props<ElementType, {}, NH5Emits>) => {
  // eslint-disable-next-line ts/no-empty-object-type
  return NucoWrapper<ElementType, {}, NH5Emits>({ elementName: "n-h5", props });
};
