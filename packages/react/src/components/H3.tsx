"use client";

import type { toReactEmits } from "@chatora/react";
import type { NH3 } from "@nuco/chatora/components/n-h3";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const H3 = (props: PropsWithChildren<ComponentProps<typeof NH3> & toReactEmits<ComponentEmits<typeof NH3>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-h3",
    children,
    props: rest,
  });
};
