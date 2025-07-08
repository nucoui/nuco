"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Li = (props: PropsWithChildren<Props<"n-li">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-li",
    children,
    props: rest,
  });
};
