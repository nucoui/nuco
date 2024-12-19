import type { NButtonEmits, NButtonProps } from "@nuko/core";
import type { Props } from "../NukoWrapper";
import { NukoWrapper } from "../NukoWrapper";

type ElementType = HTMLButtonElement;

export const Button = (props: Props<ElementType, NButtonProps, NButtonEmits>) => {
  return NukoWrapper<ElementType, NButtonProps, NButtonEmits>({ elementName: "n-button", props });
};
