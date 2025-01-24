import type { NH1Emits } from "@nuco/core";
import type { Props } from "../../NucoWrapper";
import { NucoWrapper } from "../../NucoWrapper";

type ElementType = HTMLHeadingElement;

// eslint-disable-next-line ts/no-empty-object-type
export const H1 = (props: Props<ElementType, {}, NH1Emits>) => {
  // eslint-disable-next-line ts/no-empty-object-type
  return NucoWrapper<ElementType, {}, NH1Emits>({ elementName: "n-h1", props });
};
