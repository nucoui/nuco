"use client";

import type { toReactEmits } from "@chatora/react";
import type { NH2 } from "@nuco/core/components/NH2";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const H2 = (props: PropsWithChildren<ComponentProps<typeof NH2> & toReactEmits<ComponentEmits<typeof NH2>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-h2",
    children,
    props: rest,
  });
};
