"use client";

import type { toReactEmits } from "@chatora/react";
import type { NH6 } from "@nuco/core/components/NH6";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const H6 = (props: PropsWithChildren<ComponentProps<typeof NH6> & toReactEmits<ComponentEmits<typeof NH6>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-h6",
    children,
    props: rest,
  });
};
