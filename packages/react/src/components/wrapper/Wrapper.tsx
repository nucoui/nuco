import { hastToJsx } from "@/utils/hastToJsx";
import { CustomElements } from "@nuco/chatora/elements/customElements";
import { DeclarativeCustomElements } from "@nuco/chatora/elements/declarativeCustomElements";
import { type PropsWithChildren, useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";

import { jsx } from "react/jsx-runtime";

export type Props<P extends Record<string, unknown>> = PropsWithChildren<{
  props: P;
  tag: keyof typeof CustomElements;
  formAssociated?: boolean;
}>;

const splitProps = (props: Record<string, unknown>) => {
  const emits: Record<string, (event: Event) => void> = {};
  const filteredProps: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props)) {
    if (key.startsWith("on") && key.length > 2 && key[2] === key[2].toUpperCase() && typeof value === "function") {
      emits[key] = value as (event: Event) => void;
    }
    else {
      filteredProps[key] = value;
    }
  }
  return { props: filteredProps, emits };
};

export const ChatoraWrapper = <P extends Record<string, unknown>>({ tag, children, props, formAssociated = false }: Props<P>) => {
  const id = useId();

  const { props: filteredProps, emits } = useMemo(() => splitProps(props || {}), [props]);

  const hast = DeclarativeCustomElements[tag](filteredProps as any);

  const [isDefined, setIsDefined] = useState(false);
  const [isWindow, setIsWindow] = useState(false);
  const domRef = useRef<HTMLElement | null>(null);

  const defineElement = useCallback(() => {
    if (!customElements || customElements.get(tag)) {
      return;
    }

    customElements.define(
      tag,
      class extends (CustomElements[tag]() as typeof HTMLElement) {
        static formAssociated = formAssociated;
      },
    );

    setIsDefined(true);
  }, [tag, formAssociated]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsWindow(true);
      if (customElements && customElements.get(tag)) {
        setIsDefined(true);
      }
    }
  }, [tag]);

  useEffect(() => {
    defineElement();
  }, [defineElement]);

  const toKebabEvent = useCallback((event: string) => {
    return (
      event
        .replace(/^on([A-Z])/, (_, c) => `on-${c.toLowerCase()}`)
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase()
    );
  }, []);

  const emitsRef = useRef(emits);
  emitsRef.current = emits;

  const handlerMapRef = useRef<Record<string, EventListener>>({});
  useLayoutEffect(() => {
    const map: Record<string, EventListener> = {};
    if (emits) {
      Object.entries(emits).forEach(([event, handler]) => {
        if (typeof handler === "function") {
          map[event] = (e: Event) => handler(e);
        }
      });
    }
    handlerMapRef.current = map;
  }, [emits]);

  useLayoutEffect(() => {
    const node = domRef.current;
    if (!node || !emitsRef.current)
      return;
    const listeners: Array<[string, EventListener]> = [];
    Object.entries(emitsRef.current).forEach(([event]) => {
      const kebabEvent = toKebabEvent(event);
      const stableHandler = handlerMapRef.current[event];
      if (stableHandler) {
        node.addEventListener(kebabEvent, stableHandler);
        listeners.push([kebabEvent, stableHandler]);
      }
    });
    // Cleanup
    return () => {
      if (!node)
        return;
      listeners.forEach(([kebabEvent, stableHandler]) => {
        node.removeEventListener(kebabEvent, stableHandler);
      });
    };
  }, [toKebabEvent]);

  return jsx(tag as any, {
    ...filteredProps,
    ref: domRef,
    children: (isDefined && isWindow) ? children : hastToJsx(tag, id, hast, children),
  });
};
