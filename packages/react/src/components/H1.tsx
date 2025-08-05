"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const H1 = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-h1">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-h1",
    children,
    props: rest,
  });
};
