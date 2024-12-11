import type { NukoButtonEmits, NukoButtonProps } from "@nuko/core";
import type { Props } from "../NukoWrapper";
import { NukoWrapper } from "../NukoWrapper";

type ElementType = HTMLButtonElement;

export const Button = (props: Props<ElementType, NukoButtonProps, NukoButtonEmits>) => {
  return NukoWrapper<ElementType, NukoButtonProps, NukoButtonEmits>({ elementName: "nuko-button", props });
};
