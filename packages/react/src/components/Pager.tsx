"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Pager = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-pager">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-pager",
    children,
    props: rest,
  });
};
