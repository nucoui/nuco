import type { NButtonEmits, NButtonProps } from "@nuco/core";
import type { Props } from "../NucoWrapper";
import { NucoWrapper } from "../NucoWrapper";

type ElementType = HTMLButtonElement;

export const Button = (props: Props<ElementType, NButtonProps, NButtonEmits>) => {
  return NucoWrapper<ElementType, NButtonProps, NButtonEmits>({ elementName: "n-button", props });
};
