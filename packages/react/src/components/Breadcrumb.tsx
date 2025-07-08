"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Breadcrumb = (props: PropsWithChildren<Props<"n-breadcrumb">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-breadcrumb",
    children,
    props: rest,
  });
};
