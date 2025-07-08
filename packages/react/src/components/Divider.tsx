"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Divider = (props: PropsWithChildren<Props<"n-divider">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-divider",
    children,
    props: rest,
  });
};
