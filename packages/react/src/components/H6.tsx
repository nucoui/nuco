"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const H6 = (props: PropsWithChildren<Props<"n-h6">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-h6",
    children,
    props: rest,
  });
};
