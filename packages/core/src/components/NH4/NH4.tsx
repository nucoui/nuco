import { createCC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NH4.scss?raw";

/**
 * NH4 props (no props)
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};

/**
 * NH4 does not emit any events
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const {
  component: NH4,
  genSD: genSDNH4,
  genDSD: genDSDNH4,
  define: defineNH4,
} = createCC<Props, Emits>("n-h4", () => {
  return () => (
    <Host style={[style, resetStyle]}>
      <h4 class="n-h4">
        <slot />
      </h4>
    </Host>
  );
});
