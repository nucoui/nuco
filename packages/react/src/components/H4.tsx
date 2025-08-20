"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const H4 = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-h4">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-h4",
    children,
    props: rest,
  });
};
