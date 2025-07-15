"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Badge = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-badge">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-badge",
    children,
    props: rest,
  });
};
