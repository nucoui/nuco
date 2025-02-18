import type { Props } from "@/components/NucoWrapper";
import type { EventHandlers } from "@/types/EventHandlers";
import type { Upper } from "@/types/Upper";
import type { SyntheticEvent } from "react";

export const splitAttr = <RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string>(
  inputProps: Props<RefType, ElementProps, ElementEmits>,
) => {
  const emits: EventHandlers<RefType, ElementEmits> = {};
  const props: ElementProps = {} as ElementProps;

  Object.keys(inputProps).forEach((key) => {
    if (key.startsWith("on")) {
      emits[key as Upper<ElementEmits>] = inputProps[key] as (e: SyntheticEvent<RefType>) => void;
    }
    else {
      props[key as keyof ElementProps] = inputProps[key] as ElementProps[keyof ElementProps];
    }
  });

  return { emits, props };
};
