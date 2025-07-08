"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Anchor = (props: PropsWithChildren<Props<"n-anchor">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-anchor",
    children,
    props: rest,
  });
};
