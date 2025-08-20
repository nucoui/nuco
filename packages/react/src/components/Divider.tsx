"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Divider = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-divider">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-divider",
    children,
    props: rest,
  });
};
