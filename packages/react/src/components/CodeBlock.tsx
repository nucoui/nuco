"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const CodeBlock = (props: PropsWithChildren<Props<"n-code-block">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-code-block",
    children,
    props: rest,
  });
};
