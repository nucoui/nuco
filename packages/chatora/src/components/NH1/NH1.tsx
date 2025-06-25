import type { CC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NH1.scss?raw";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};
export type Emits = never;

export const NH1: CC<Props, Emits> = ({
  defineProps,
}) => {
  defineProps({});

  return () => (
    <Host style={[style, resetStyle]}>
      <h1 class="n-h1">
        <slot />
      </h1>
    </Host>
  );
};
