"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Button = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-button">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-button",
    children,
    props: rest,
  });
};
