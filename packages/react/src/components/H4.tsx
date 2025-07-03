"use client";

import type { toReactEmits } from "@chatora/react";
import type { NH4 } from "@nuco/chatora/components/n-h4";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const H4 = (props: PropsWithChildren<ComponentProps<typeof NH4> & toReactEmits<ComponentEmits<typeof NH4>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-h4",
    children,
    props: rest,
  });
};
