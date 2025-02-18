"use client";

import type { EventHandlers } from "@/types/EventHandlers";
import type { Upper } from "@/types/Upper";
import type { JSX, ReactNode } from "react";
import { splitAttr } from "@/utils/splitAttr";
import { type ElementNames, resisterElement } from "@nuco/core";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { jsx as _jsx } from "react/jsx-runtime";

export type Props<RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string> = ElementProps & EventHandlers<RefType, ElementEmits> & { children?: ReactNode | undefined };

type WrapperProps<RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string> = {
  elementName: ElementNames;
  props: Props<RefType, ElementProps, ElementEmits>;
};

export const NucoWrapper = <RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string>({ elementName, props }: WrapperProps<RefType, ElementProps, ElementEmits>) => {
  const ref = useRef<RefType | null>(null);
  const { emits, props: elementProps } = useMemo(() => splitAttr(props), [props]);

  useLayoutEffect(() => {
    // customElements.whenDefined(elementName).then(() => console.info(`${elementName} is defined with React`));
    resisterElement(elementName);
  }, []);

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
  ) as JSX.Element;
};
