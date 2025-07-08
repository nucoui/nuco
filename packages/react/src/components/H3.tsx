"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const H3 = (props: PropsWithChildren<Props<"n-h3">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-h3",
    children,
    props: rest,
  });
};
