"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const H1 = (props: PropsWithChildren<Props<"n-h1">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-h1",
    children,
    props: rest,
  });
};
