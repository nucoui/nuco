"use client";

import type { toReactEmits } from "@chatora/react";
import type { NPagers } from "@nuco/core/components/NPagers";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Pagers = (props: PropsWithChildren<ComponentProps<typeof NPagers> & toReactEmits<ComponentEmits<typeof NPagers>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-pagers",
    children,
    props: rest,
  });
};
