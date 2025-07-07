"use client";

import type { toReactEmits } from "@chatora/react";
import type { NSelect } from "@nuco/core/components/NSelect";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Select = (props: PropsWithChildren<ComponentProps<typeof NSelect> & toReactEmits<ComponentEmits<typeof NSelect>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-select",
    children,
    props: rest,
  });
};
