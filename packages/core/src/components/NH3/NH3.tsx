import type { CC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NH3.scss?raw";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};
// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const NH3: CC<Props, Emits> = ({
  defineProps,
}) => {
  defineProps({});

  return () => (
    <Host style={[style, resetStyle]}>
      <h3 class="n-h3">
        <slot />
      </h3>
    </Host>
  );
};
