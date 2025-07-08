"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const H2 = (props: PropsWithChildren<Props<"n-h2">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-h2",
    children,
    props: rest,
  });
};
