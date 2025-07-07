import type { CC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NH4.scss?raw";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};
// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const NH4: CC<Props, Emits> = ({
  defineProps,
}) => {
  defineProps({});

  return () => (
    <Host style={[style, resetStyle]}>
      <h4 class="n-h4">
        <slot />
      </h4>
    </Host>
  );
};
