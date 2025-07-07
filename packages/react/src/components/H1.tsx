"use client";

import type { toReactEmits } from "@chatora/react";
import type { NH1 } from "@nuco/core/components/NH1";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const H1 = (props: PropsWithChildren<ComponentProps<typeof NH1> & toReactEmits<ComponentEmits<typeof NH1>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-h1",
    children,
    props: rest,
  });
};
