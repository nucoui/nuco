"use client";

import type { toReactEmits } from "@chatora/react";
import type { NButton } from "@nuco/core/components/NButton";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Button = (props: PropsWithChildren<ComponentProps<typeof NButton> & toReactEmits<ComponentEmits<typeof NButton>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-button",
    children,
    props: rest,
  });
};
