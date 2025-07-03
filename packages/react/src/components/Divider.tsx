"use client";

import type { toReactEmits } from "@chatora/react";
import type { NDivider } from "@nuco/chatora/components/n-divider";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Divider = (props: PropsWithChildren<ComponentProps<typeof NDivider> & toReactEmits<ComponentEmits<typeof NDivider>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-divider",
    children,
    props: rest,
  });
};
