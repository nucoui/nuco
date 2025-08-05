"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Select = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-select">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-select",
    children,
    props: rest,
    formAssociated: true,
  });
};
