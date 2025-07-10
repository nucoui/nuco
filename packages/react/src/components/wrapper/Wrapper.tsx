"use client";

import type { toReactEmits } from "@chatora/react";
import type Elements from "@nuco/core/elements/elements";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { HTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { disableError, hastToJsx, splitProps } from "@chatora/react";
import CustomElements from "@nuco/core/elements/customElements";
import DeclarativeCustomElements from "@nuco/core/elements/declarativeCustomElements";
import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";

disableError();

export type Props<T extends keyof typeof CustomElements = keyof typeof CustomElements> = PropsWithChildren<{
  props: ComponentProps<typeof Elements[T]> & toReactEmits<ComponentEmits<typeof Elements[T]>> & {
    slot?: HTMLAttributes<HTMLElement>["slot"];
    className?: HTMLAttributes<HTMLElement>["className"];
  };
  tag: T;
  formAssociated?: boolean;
}>;
export const ChatoraWrapper = <T extends keyof typeof CustomElements>({ tag, children, props, formAssociated = false }: Props<T>) => {
  const [isDefined, setIsDefined] = useState(false);

  const id = useId();
  const { props: filteredProps, emits } = useMemo(() => splitProps(props || {}), [props]);
  const hast = DeclarativeCustomElements[tag](filteredProps as any);
  const [content, setContent] = useState<ReactNode>([hastToJsx(hast, `${id}-content`), children]);
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
      ...filteredProps,
      children: content,
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
