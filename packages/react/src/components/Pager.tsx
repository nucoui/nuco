"use client";

import type { toReactEmits } from "@chatora/react";
import type { NPager } from "@nuco/core/components/NPager";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Pager = (props: PropsWithChildren<ComponentProps<typeof NPager> & toReactEmits<ComponentEmits<typeof NPager>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-pager",
    children,
    props: rest,
  });
};
