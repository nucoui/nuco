import type { CC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NH2.scss?raw";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};
// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const NH2: CC<Props, Emits> = ({
  defineProps,
}) => {
  defineProps({});

  return () => (
    <Host style={[style, resetStyle]}>
      <h2 class="n-h2">
        <slot />
      </h2>
    </Host>
  );
};
