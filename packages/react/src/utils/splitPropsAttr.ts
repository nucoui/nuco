import type { EventHandlers } from "@/types/EventHandlers";
import type { Props } from "@/types/Props";
import type { Upper } from "@/types/Upper";
import type { ReactNode, SyntheticEvent } from "react";

function camelToKebabCase(str: string): string {
  return str.replace(/([a-z0-9]?)([A-Z])/g, "$1-$2").toLowerCase();
}

export const splitPropsAttr = <RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string>(
  inputProps: Props<RefType, ElementProps, ElementEmits>,
) => {
  const emits: EventHandlers<RefType, ElementEmits> = {};
  const props: ElementProps = {} as ElementProps;
  let children: ReactNode | undefined;

  Object.keys(inputProps).forEach((key) => {
    if (key.startsWith("on")) {
      emits[key as Upper<ElementEmits>] = inputProps[key] as (e: SyntheticEvent<RefType>) => void;
    }
    else {
      if (key === "children") {
        children = inputProps[key];
        return;
      }
      props[camelToKebabCase(key) as keyof ElementProps] = inputProps[key] as ElementProps[keyof ElementProps];
    }
  });

  return { emits, props, children };
};
