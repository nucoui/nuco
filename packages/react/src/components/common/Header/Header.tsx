import type { Props } from "@/components/NucoWrapper";
import type { NHeaderEmits, NHeaderProps } from "@nuco/core";
import { NucoWrapper } from "@/components/NucoWrapper";

type ElementType = HTMLHeadElement;

export const Header = (props: Props<ElementType, NHeaderProps, NHeaderEmits>) => {
  return NucoWrapper<ElementType, NHeaderProps, NHeaderEmits>({ elementName: "n-header", props });
};
