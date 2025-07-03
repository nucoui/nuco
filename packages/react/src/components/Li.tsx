"use client";

import type { toReactEmits } from "@chatora/react";
import type { NLi } from "@nuco/chatora/components/n-li";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Li = (props: PropsWithChildren<ComponentProps<typeof NLi> & toReactEmits<ComponentEmits<typeof NLi>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-li",
    children,
    props: rest,
  });
};
