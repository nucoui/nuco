"use client";

import type { toReactEmits } from "@chatora/react";
import type { NOption } from "@nuco/chatora/components/n-option";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Option = (props: PropsWithChildren<ComponentProps<typeof NOption> & toReactEmits<ComponentEmits<typeof NOption>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-option",
    children,
    props: rest,
  });
};
