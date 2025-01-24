import type { Props } from "@/components/NucoWrapper";
import type { NButtonEmits, NButtonProps } from "@nuco/core";
import { NucoWrapper } from "@/components/NucoWrapper";

type ElementType = HTMLButtonElement;

export const Button = (props: Props<ElementType, NButtonProps, NButtonEmits>) => {
  return NucoWrapper<ElementType, NButtonProps, NButtonEmits>({ elementName: "n-button", props });
};
