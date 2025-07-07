import type { CC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NBreadcrumb.scss?raw";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};

// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const NBreadcrumb: CC<Props, Emits> = () => {
  return () => (
    <Host shadowRoot style={[style, resetStyle]}>
      <ol class="n-breadcrumb">
        <slot />
      </ol>
    </Host>
  );
};
