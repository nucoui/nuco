"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Button = (props: PropsWithChildren<Props<"n-button">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-button",
    children,
    props: rest,
  });
};
