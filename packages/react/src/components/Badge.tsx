"use client";

import type { toReactEmits } from "@chatora/react";
import type { NBadge } from "@nuco/chatora/components/n-badge";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Badge = (props: PropsWithChildren<ComponentProps<typeof NBadge> & toReactEmits<ComponentEmits<typeof NBadge>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-badge",
    children,
    props: rest,
  });
};
