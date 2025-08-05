"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Option = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-option">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-option",
    children,
    props: rest,
  });
};
