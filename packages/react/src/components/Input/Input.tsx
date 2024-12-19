import type { NInputEmits, NInputProps } from "@nuko/core";
import type { Props } from "../NukoWrapper";
import { NukoWrapper } from "../NukoWrapper";

type ElementType = HTMLInputElement;

export const Input = (props: Props<ElementType, NInputProps, NInputEmits>) => {
  return NukoWrapper<ElementType, NInputProps, NInputEmits>({ elementName: "n-input", props });
};
