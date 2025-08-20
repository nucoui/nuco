"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Header = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-header">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-header",
    children,
    props: rest,
  });
};
