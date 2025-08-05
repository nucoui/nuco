"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Input = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-input">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-input",
    children,
    props: rest,
    formAssociated: true,
  });
};
