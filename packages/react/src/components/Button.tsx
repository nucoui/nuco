"use client";

import type { toReactEmits } from "@chatora/react";
import type { NButton } from "@nuco/chatora/components/n-button";
import type { ComponentEmits, ComponentProps } from "chatora";
import type { FC, PropsWithChildren } from "react";
import { ChatoraWrapper } from "@/components/wrapper/Wrapper";

type Props = PropsWithChildren<ComponentProps<typeof NButton> & toReactEmits<ComponentEmits<typeof NButton>>>;

export const Button: FC<Props> = (props) => {
  const { children, ...rest } = props;
  return ChatoraWrapper({
    tag: "n-button",
    children,
    props: rest,
  });
};
