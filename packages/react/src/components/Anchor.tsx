"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Anchor = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-anchor">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-anchor",
    children,
    props: rest,
  });
};
