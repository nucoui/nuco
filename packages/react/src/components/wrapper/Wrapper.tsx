"use client";

import type Elements from "@nuco/core/elements/elements";
import type { ComponentProps } from "chatora";
import type { HTMLAttributes, Key, PropsWithChildren, ReactNode, Ref } from "react";
import { disableError, hastToJsx, splitProps, useIsClient } from "@chatora/react";
import CustomElements from "@nuco/core/elements/customElements";
import DeclarativeCustomElements from "@nuco/core/elements/declarativeCustomElements";
import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { jsx } from "react/jsx-runtime";

disableError();

// Constants for browser and DSD support detection
const isServer = typeof document === "undefined";
const supportsDSD = !isServer && "shadowRootMode" in HTMLTemplateElement.prototype;

export type Props<T extends keyof typeof CustomElements = keyof typeof CustomElements> = PropsWithChildren<{
  props: Omit<ComponentProps<typeof Elements[T]>, "children"> & {
    "slot"?: HTMLAttributes<HTMLElement>["slot"];
    "className"?: HTMLAttributes<HTMLElement>["className"];
    "ref"?: Ref<HTMLElement>;
    "key"?: Key;
    "id"?: string;
    "style"?: React.CSSProperties;
    "title"?: string;
    "data-testid"?: string;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "aria-describedby"?: string;
    "role"?: string;
    "tabIndex"?: number;
  };
  tag: T;
  formAssociated?: boolean;
}>;

export const ChatoraWrapper = <T extends keyof typeof CustomElements>({
  tag,
  children,
  props,
  formAssociated = false,
}: Props<T>) => {
  const isClient = useIsClient();

  const { props: { key, ref, ...filteredProps }, emits } = useMemo(() => splitProps(props || {}), [props]);

  const id = useId();
  const hast = DeclarativeCustomElements[tag](filteredProps as any);
  const [content, setContent] = useState<ReactNode>([hastToJsx(hast, `${id}-content`), children]);
  const domRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setContent(children);
  }, [children]);

  useLayoutEffect(() => {
    if (!customElements || customElements.get(tag)) {
      return;
    }

    class element extends CustomElements[tag]() {
      static formAssociated = formAssociated;
    };

    customElements.define(tag, element);
  }, [formAssociated, tag]);

  if (isClient) {
    return jsx(tag as any, {
      ref: domRef,
      ...filteredProps,
      ...emits,
      children: content,
    }, `${id}-hydration`);
  }

  // Server-side rendering with potential DSD support
  // Let Chatora handle shadow DOM via functionalDeclarativeCustomElement,
  // but enhance with DSD awareness
  if (supportsDSD) {
    // When DSD is supported, the content from functionalDeclarativeCustomElement
    // might already contain the proper template structure
    return jsx(tag as any, {
      ...filteredProps,
      children: content,
    }, `${id}-dsd-ssr`);
  }

  // Fallback SSR without DSD support
  return jsx(tag as any, {
    ...filteredProps,
    children: content,
  }, `${id}-ssr`);
};
