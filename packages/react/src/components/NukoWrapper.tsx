import type { ElementNames } from "@nuko/core";
import type { PropsWithChildren, SyntheticEvent } from "react";
import { resisterElement } from "@nuko/core";
import { useEffect, useMemo, useRef } from "react";
import { jsx as _jsx } from "react/jsx-runtime";

type Upper<T extends string> = `on${Capitalize<T>}`;

type EventHandlers<RefType extends HTMLElement, ElementEmits extends string | never> = {
  [K in Upper<ElementEmits>]?: (e: SyntheticEvent<RefType>) => void;
};

export type Props<RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string> = PropsWithChildren<ElementProps & EventHandlers<RefType, ElementEmits>>;

type WrapperProps<RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string> = {
  elementName: ElementNames;
  props: Props<RefType, ElementProps, ElementEmits>;
};

function splitProps<RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string>(
  inputProps: Props<RefType, ElementProps, ElementEmits>,
) {
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
}

export const NukoWrapper = <RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string>({ elementName, props }: WrapperProps<RefType, ElementProps, ElementEmits>) => {
  resisterElement(elementName);

  const ref = useRef<RefType | null>(null);
  const { emits, props: elementProps } = useMemo(() => splitProps(props), [props]);

  useEffect(() => {
    const currentRef = ref.current;

    const manageEventListener = (action: "add" | "remove") => {
      Object.keys(emits).forEach((key) => {
        const eventName = key as Upper<ElementEmits>;
        const handler = emits[eventName];

        const onCustomEvent = (event: CustomEvent) => {
          if (!event.detail)
            return;
          handler?.(event.detail[1]);
        };

        if (currentRef) {
          currentRef[`${action}EventListener`](eventName, onCustomEvent as EventListener);
        }
      });
    };

    manageEventListener("add");
    return () => manageEventListener("remove");
  }, [emits]);

  return _jsx(
    elementName as any,
    {
      ...elementProps,
      ref,
    },
    void 0,
  );
};
