import type { NInputEmits, NInputProps } from "@nuco/core";
import type { Props } from "../../NucoWrapper";
import { NucoWrapper } from "../../NucoWrapper";

type ElementType = HTMLInputElement;

export const Input = (props: Props<ElementType, NInputProps, NInputEmits>) => {
  return NucoWrapper<ElementType, NInputProps, NInputEmits>({ elementName: "n-input", props });
};
