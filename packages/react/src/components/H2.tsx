"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const H2 = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-h2">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-h2",
    children,
    props: rest,
  });
};
