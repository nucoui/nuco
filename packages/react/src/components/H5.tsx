"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const H5 = (props: PropsWithChildren<Props<"n-h5">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-h5",
    children,
    props: rest,
  });
};
