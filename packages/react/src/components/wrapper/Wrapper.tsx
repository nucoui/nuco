"use client";

import type { toReactEmits } from "@chatora/react";
import type Elements from "@nuco/core/elements/elements";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { HTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { hastToJsx } from "@/utils/hastToJsx";
import CustomElements from "@nuco/core/elements/customElements";
import DeclarativeCustomElements from "@nuco/core/elements/declarativeCustomElements";
import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";

export type Props<T extends keyof typeof CustomElements = keyof typeof CustomElements> = PropsWithChildren<{
  props: ComponentProps<typeof Elements[T]> & toReactEmits<ComponentEmits<typeof Elements[T]>> & {
    slot?: HTMLAttributes<HTMLElement>["slot"];
    className?: HTMLAttributes<HTMLElement>["className"];
  };
  tag: T;
  formAssociated?: boolean;
}>;

const splitProps = (props: Record<string, unknown>) => {
  const emits: Record<`on${string}`, (event: Event) => void> = {};
  const filteredProps: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props)) {
    if (key.startsWith("on") && key.length > 2 && key[2] === key[2].toUpperCase() && typeof value === "function") {
      const sliced = key.slice(2);
      const normalized = sliced.charAt(0).toLowerCase() + sliced.slice(1);
      const kebabKey = `onon-${normalized}`
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase();
      emits[kebabKey as `on${string}`] = value as (event: Event) => void;
    }
    else {
      filteredProps[key] = value;
    }
  }
  return { props: filteredProps, emits };
};

export const ChatoraWrapper = <T extends keyof typeof CustomElements>({ tag, children, props, formAssociated = false }: Props<T>) => {
  const [isDefined, setIsDefined] = useState(false);

  const id = useId();
  const { props: filteredProps, emits } = useMemo(() => splitProps(props || {}), [props]);
  const hast = DeclarativeCustomElements[tag](filteredProps as any);
  const [content, setContent] = useState<ReactNode>(hastToJsx(tag, id, hast, [children]));
  const domRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setContent([children]);
  }, [children]);

  useLayoutEffect(() => {
    if (!customElements) {
      return;
    }

    if (customElements.get(tag)) {
      setIsDefined(true);
      return;
    }

    class element extends CustomElements[tag]() {
      static formAssociated = formAssociated;
    };

    customElements.define(tag, element);
    setIsDefined(true);
  }, [formAssociated, tag]);

  if (!isDefined) {
    return jsx(tag as any, {
      dangerouslySetInnerHTML: {
        __html: renderToString(content),
      },
      suppressHydrationWarning: true,
    }, `${id}-ssr`);
  }
  else {
    return jsx(tag as any, {
      ref: domRef,
      ...filteredProps,
      ...emits,
      children: content,
      suppressHydrationWarning: true,
    }, `${id}-hydration`);
  }
};
