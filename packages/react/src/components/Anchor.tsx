"use client";

import type { toReactEmits } from "@chatora/react";
import type { NAnchor } from "@nuco/core/components/NAnchor";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Anchor = (props: PropsWithChildren<ComponentProps<typeof NAnchor> & toReactEmits<ComponentEmits<typeof NAnchor>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-anchor",
    children,
    props: rest,
  });
};
