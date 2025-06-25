import type { CC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NH6.scss?raw";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};
export type Emits = never;

export const NH6: CC<Props, Emits> = ({
  defineProps,
}) => {
  defineProps({});

  return () => (
    <Host style={[style, resetStyle]}>
      <h6 class="n-h6">
        <slot />
      </h6>
    </Host>
  );
};
