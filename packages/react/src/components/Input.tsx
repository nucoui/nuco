"use client";

import type { toReactEmits } from "@chatora/react";
import type { NInput } from "@nuco/core/components/NInput";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Input = (props: PropsWithChildren<ComponentProps<typeof NInput> & toReactEmits<ComponentEmits<typeof NInput>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-input",
    children,
    props: rest,
  });
};
