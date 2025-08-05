"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const H3 = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-h3">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-h3",
    children,
    props: rest,
  });
};
