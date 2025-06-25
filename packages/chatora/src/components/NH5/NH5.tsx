import type { CC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NH5.scss?raw";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};
export type Emits = never;

export const NH5: CC<Props, Emits> = ({
  defineProps,
}) => {
  defineProps({});

  return () => (
    <Host style={[style, resetStyle]}>
      <h5 class="n-h5">
        <slot />
      </h5>
    </Host>
  );
};
