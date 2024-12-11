import type { NukoInputEmits, NukoInputProps } from "@nuko/core";
import type { Props } from "../NukoWrapper";
import { NukoWrapper } from "../NukoWrapper";

type ElementType = HTMLInputElement;

export const Input = (props: Props<ElementType, NukoInputProps, NukoInputEmits>) => {
  return NukoWrapper<ElementType, NukoInputProps, NukoInputEmits>({ elementName: "nuko-input", props });
};
