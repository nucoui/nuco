"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Badge = (props: PropsWithChildren<Props<"n-badge">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-badge",
    children,
    props: rest,
  });
};
