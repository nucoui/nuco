"use client";

import type { Props } from "@/components/wrapper/Wrapper";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Select = (props: PropsWithChildren<Props<"n-select">["props"]>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-select",
    children,
    props: rest,
    formAssociated: true,
  });
};
