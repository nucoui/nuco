import type { NH3Emits } from "@nuco/core";
import type { Props } from "../../NucoWrapper";
import { NucoWrapper } from "../../NucoWrapper";

type ElementType = HTMLHeadingElement;

// eslint-disable-next-line ts/no-empty-object-type
export const H3 = (props: Props<ElementType, {}, NH3Emits>) => {
  // eslint-disable-next-line ts/no-empty-object-type
  return NucoWrapper<ElementType, {}, NH3Emits>({ elementName: "n-h3", props });
};
