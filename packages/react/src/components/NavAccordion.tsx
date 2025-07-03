"use client";

import type { toReactEmits } from "@chatora/react";
import type { NNavAccordion } from "@nuco/chatora/components/n-nav-accordion";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const NavAccordion = (props: PropsWithChildren<ComponentProps<typeof NNavAccordion> & toReactEmits<ComponentEmits<typeof NNavAccordion>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-nav-accordion",
    children,
    props: rest,
  });
};
