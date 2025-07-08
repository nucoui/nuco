"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Header = (props: PropsWithChildren<Props<"n-header">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-header",
    children,
    props: rest,
  });
};
