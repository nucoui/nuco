"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Input = (props: PropsWithChildren<Props<"n-input">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-input",
    children,
    props: rest,
    formAssociated: true,
  });
};
