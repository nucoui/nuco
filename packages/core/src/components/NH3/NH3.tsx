import { createCC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NH3.scss?raw";

/**
 * NH3 props (no props)
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};

/**
 * NH3 does not emit any events
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const {
  component: NH3,
  genSD: genSDNH3,
  genDSD: genDSDNH3,
  define: defineNH3,
} = createCC<Props, Emits>("n-h3", () => {
  return () => (
    <Host style={[style, resetStyle]}>
      <h3 class="n-h3">
        <slot />
      </h3>
    </Host>
  );
});
