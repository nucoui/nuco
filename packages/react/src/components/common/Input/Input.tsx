import type { Props } from "@/components/NucoWrapper";
import type { NInputEmits, NInputProps } from "@nuco/core";
import { NucoWrapper } from "@/components/NucoWrapper";

type ElementType = HTMLInputElement;

export const Input = (props: Props<ElementType, NInputProps, NInputEmits>) => {
  return NucoWrapper<ElementType, NInputProps, NInputEmits>({ elementName: "n-input", props });
};
