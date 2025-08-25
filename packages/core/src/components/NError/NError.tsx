import { createCC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NError.scss?raw";

/**
 * NError props (no props)
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};

/**
 * NError does not emit any events
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const {
  component: NError,
  genSD: genSDNError,
  genDSD: genDSDNError,
  define: defineNError,
} = createCC<Props, Emits>("n-error", () => {
  return () => (
    <Host shadowRoot style={[style, resetStyle]}>
      <div class="n-error">
        <slot />
      </div>
    </Host>
  );
});
