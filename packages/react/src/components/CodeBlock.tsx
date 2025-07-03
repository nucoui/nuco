"use client";

import type { toReactEmits } from "@chatora/react";
import type { NCodeBlock } from "@nuco/chatora/components/n-code-block";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const CodeBlock = (props: PropsWithChildren<ComponentProps<typeof NCodeBlock> & toReactEmits<ComponentEmits<typeof NCodeBlock>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-code-block",
    children,
    props: rest,
  });
};
