import type { NukoButtonEmits, NukoButtonProps } from "@nuko/core";
import type { Props } from "../_Wrapper";
import { Wrapper } from "../_Wrapper";

type ElementType = HTMLButtonElement;

export const Button = (props: Props<ElementType, NukoButtonProps, NukoButtonEmits>) => {
  return Wrapper<ElementType, NukoButtonProps, NukoButtonEmits>({ elementName: "nuko-button", props });
};
