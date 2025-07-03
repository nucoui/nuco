"use client";

import type { toReactEmits } from "@chatora/react";
import type { NH5 } from "@nuco/chatora/components/n-h5";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const H5 = (props: PropsWithChildren<ComponentProps<typeof NH5> & toReactEmits<ComponentEmits<typeof NH5>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-h5",
    children,
    props: rest,
  });
};
