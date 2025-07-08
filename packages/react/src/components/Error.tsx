"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Error = (props: PropsWithChildren<Props<"n-error">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-error",
    children,
    props: rest,
  });
};
