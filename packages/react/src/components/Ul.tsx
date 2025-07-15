"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Ul = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-ul">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-ul",
    children,
    props: rest,
  });
};
