"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Pager = (props: PropsWithChildren<Props<"n-pager">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-pager",
    children,
    props: rest,
  });
};
