"use client";

import type { Props } from "@/types/Props";
import type { Upper } from "@/types/Upper";
import type { ElementNames } from "@nuco/core";
import type { JSX } from "react";
import { splitPropsAttr } from "@/utils/splitPropsAttr";
import { resisterElement } from "@nuco/core";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { jsx as _jsx } from "react/jsx-runtime";

type ClientWrapperProps<RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string> = {
  elementName: ElementNames;
  props: Props<RefType, ElementProps, ElementEmits>;
};

export const NucoClientWrapper = <RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string>({ elementName, props }: ClientWrapperProps<RefType, ElementProps, ElementEmits>) => {
  const ref = useRef<RefType | null>(null);
  const { emits, props: elementProps, children } = useMemo(() => splitPropsAttr(props), [props]);
  const eventListenersAdded = useRef<Set<string>>(new Set());

  useLayoutEffect(() => {
    // customElements.whenDefined(elementName).then(() => console.info(`${elementName} is defined with React`));
    resisterElement(elementName);
  }, []);

  useEffect(() => {
    const currentRef = ref.current;
    const currentEventListenersAdded = eventListenersAdded.current;

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
          const eventListenerKey = `${eventName}-${action}`;
          if (action === "add" && !currentEventListenersAdded.has(eventListenerKey)) {
            currentRef.addEventListener(eventName, onCustomEvent as EventListener);
            currentEventListenersAdded.add(eventListenerKey);
          }
          else if (action === "remove" && currentEventListenersAdded.has(eventListenerKey)) {
            currentRef.removeEventListener(eventName, onCustomEvent as EventListener);
            currentEventListenersAdded.delete(eventListenerKey);
          }
        }
      });
    };

    manageEventListener("add");
    return () => {
      manageEventListener("remove");
      currentEventListenersAdded.clear();
    };
  }, [emits]);

  return _jsx(
    elementName as any,
    {
      ...elementProps,
      children,
      ref,
    },
    void 0,
  ) as JSX.Element;
};
