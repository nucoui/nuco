import { createCC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NH2.scss?raw";

/**
 * NH2 props (no props)
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};

/**
 * NH2 does not emit any events
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const {
  component: NH2,
  genSD: genSDNH2,
  genDSD: genDSDNH2,
  define: defineNH2,
} = createCC<Props, Emits>("n-h2", () => {
  return () => (
    <Host style={[style, resetStyle]}>
      <h2 class="n-h2">
        <slot />
      </h2>
    </Host>
  );
});
