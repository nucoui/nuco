import type { NH6Emits } from "@nuco/core";
import type { Props } from "../../NucoWrapper";
import { NucoWrapper } from "../../NucoWrapper";

type ElementType = HTMLHeadingElement;

// eslint-disable-next-line ts/no-empty-object-type
export const H6 = (props: Props<ElementType, {}, NH6Emits>) => {
  // eslint-disable-next-line ts/no-empty-object-type
  return NucoWrapper<ElementType, {}, NH6Emits>({ elementName: "n-h6", props });
};
