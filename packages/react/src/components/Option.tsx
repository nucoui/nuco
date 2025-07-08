"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Option = (props: PropsWithChildren<Props<"n-option">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-option",
    children,
    props: rest,
  });
};
