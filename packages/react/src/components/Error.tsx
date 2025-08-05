"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Error = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-error">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-error",
    children,
    props: rest,
  });
};
