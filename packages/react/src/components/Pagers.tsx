"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Pagers = (props: PropsWithChildren<Props<"n-pagers">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-pagers",
    children,
    props: rest,
  });
};
