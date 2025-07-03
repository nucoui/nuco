"use client";

import type { toReactEmits } from "@chatora/react";
import type { NError } from "@nuco/chatora/components/n-error";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Error = (props: PropsWithChildren<ComponentProps<typeof NError> & toReactEmits<ComponentEmits<typeof NError>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-error",
    children,
    props: rest,
  });
};
