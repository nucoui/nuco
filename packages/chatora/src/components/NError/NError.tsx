import type { CC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NError.scss?raw";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};

// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const NError: CC<Props, Emits> = () => {
  return () => (
    <Host shadowRoot style={[style, resetStyle]}>
      <div class="n-error">
        <slot />
      </div>
    </Host>
  );
};
