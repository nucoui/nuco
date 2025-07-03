"use client";

import type { toReactEmits } from "@chatora/react";
import type { NHeader } from "@nuco/chatora/components/n-header";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Header = (props: PropsWithChildren<ComponentProps<typeof NHeader> & toReactEmits<ComponentEmits<typeof NHeader>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-header",
    children,
    props: rest,
  });
};
