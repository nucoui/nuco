"use client";

import type { toReactEmits } from "@chatora/react";
import type { NUl } from "@nuco/chatora/components/n-ul";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Ul = (props: PropsWithChildren<ComponentProps<typeof NUl> & toReactEmits<ComponentEmits<typeof NUl>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-ul",
    children,
    props: rest,
  });
};
