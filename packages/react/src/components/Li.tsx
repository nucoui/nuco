"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Li = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-li">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-li",
    children,
    props: rest,
  });
};
