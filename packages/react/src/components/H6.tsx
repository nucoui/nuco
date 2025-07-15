"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const H6 = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-h6">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-h6",
    children,
    props: rest,
  });
};
