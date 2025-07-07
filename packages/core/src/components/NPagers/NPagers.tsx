import type { CC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NPagers.scss?raw";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};

// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const NPagers: CC<Props, Emits> = () => {
  return () => (
    <Host shadowRoot style={[style, resetStyle]}>
      <div>
        <div class="divider" />
        <nav class="n-pagers">
          <span class="prev">
            <slot name="prev" />
          </span>
          <span class="next">
            <slot name="next" />
          </span>
        </nav>
      </div>
    </Host>
  );
};
