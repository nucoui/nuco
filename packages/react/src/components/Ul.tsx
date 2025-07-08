"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Ul = (props: PropsWithChildren<Props<"n-ul">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-ul",
    children,
    props: rest,
  });
};
