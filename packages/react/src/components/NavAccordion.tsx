"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const NavAccordion = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-nav-accordion">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-nav-accordion",
    children,
    props: rest,
  });
};
