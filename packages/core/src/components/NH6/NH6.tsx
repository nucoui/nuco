import { createCC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NH6.scss?raw";

/**
 * NH6 props (no props)
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};

/**
 * NH6 does not emit any events
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const {
  component: NH6,
  genSD: genSDNH6,
  genDSD: genDSDNH6,
  define: defineNH6,
} = createCC<Props, Emits>("n-h6", () => {
  return () => (
    <Host style={[style, resetStyle]}>
      <h6 class="n-h6">
        <slot />
      </h6>
    </Host>
  );
});
