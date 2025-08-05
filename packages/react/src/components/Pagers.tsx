"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Pagers = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-pagers">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-pagers",
    children,
    props: rest,
  });
};
