import type { NH2Emits } from "@nuco/core";
import type { Props } from "../NucoWrapper";
import { NucoWrapper } from "../NucoWrapper";

type ElementType = HTMLHeadingElement;

// eslint-disable-next-line ts/no-empty-object-type
export const H2 = (props: Props<ElementType, {}, NH2Emits>) => {
  // eslint-disable-next-line ts/no-empty-object-type
  return NucoWrapper<ElementType, {}, NH2Emits>({ elementName: "n-h2", props });
};
