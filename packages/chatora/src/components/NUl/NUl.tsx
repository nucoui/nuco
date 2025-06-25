import type { CC } from "chatora";
import { toMatched } from "@chatora/util";
import { Host } from "chatora/jsx-runtime";
import clsx from "clsx";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NUl.scss?raw";

export type Props = {
  type?: "none" | "disc" | "decimal";
};

export type Emits = never;

export const NUl: CC<Props, Emits> = ({
  defineProps,
}) => {
  const props = defineProps({
    type: v => toMatched(v, ["none", "disc", "decimal"]) ?? "disc",
  });

  return () => (
    <Host style={[style, resetStyle]}>
      <ul class={clsx("n-ul", `-type-${props().type}`)}>
        <slot />
      </ul>
    </Host>
  );
};
