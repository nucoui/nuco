"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const CodeBlock = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-code-block">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-code-block",
    children,
    props: rest,
  });
};
