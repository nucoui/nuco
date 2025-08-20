"use client";

import type { ComponentProps, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Breadcrumb = (props: PropsWithChildren<ComponentProps<typeof ChatoraWrapper<"n-breadcrumb">>["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-breadcrumb",
    children,
    props: rest,
  });
};
