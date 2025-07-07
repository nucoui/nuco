"use client";

import type { toReactEmits } from "@chatora/react";
import type { NBreadcrumb } from "@nuco/core/components/NBreadcrumb";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

export const Breadcrumb = (props: PropsWithChildren<ComponentProps<typeof NBreadcrumb> & toReactEmits<ComponentEmits<typeof NBreadcrumb>>>) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-breadcrumb",
    children,
    props: rest,
  });
};
