"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const H5 = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-h5">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-h5",
    children,
    props: rest,
  });
};
