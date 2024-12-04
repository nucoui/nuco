import type { NukoInputEmits, NukoInputProps } from "@nuko/core";
import type { Props } from "../_Wrapper";
import { Wrapper } from "../_Wrapper";

type ElementType = HTMLInputElement;

export const Input = (props: Props<ElementType, NukoInputProps, NukoInputEmits>) => {
  return Wrapper<ElementType, NukoInputProps, NukoInputEmits>({ elementName: "nuko-input", props });
};
