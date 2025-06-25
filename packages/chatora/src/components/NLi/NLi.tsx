import type { CC } from "chatora";
import { toMatched } from "@chatora/util";
import { Host } from "chatora/jsx-runtime";
import clsx from "clsx";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NLi.scss?raw";

export type Props = {
  marker?: "none" | "disc" | "decimal";
};

export type Emits = never;

export const NLi: CC<Props, Emits> = ({
  defineProps,
}) => {
  const props = defineProps({
    marker: v => toMatched(v, ["none", "disc", "decimal"]),
  });

  return () => (
    <Host style={[style, resetStyle]}>
      <li
        part="li"
        class={clsx("n-li", props().marker && `-marker-${props().marker}`)}
      >
        <slot />
      </li>
    </Host>
  );
};
