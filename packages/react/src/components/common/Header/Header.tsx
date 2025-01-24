import type { NHeaderEmits, NHeaderProps } from "@nuco/core";
import type { Props } from "../../NucoWrapper";
import { NucoWrapper } from "../../NucoWrapper";

type ElementType = HTMLHeadElement;

export const Header = (props: Props<ElementType, NHeaderProps, NHeaderEmits>) => {
  return NucoWrapper<ElementType, NHeaderProps, NHeaderEmits>({ elementName: "n-header", props });
};
