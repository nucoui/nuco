import { createCC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NH5.scss?raw";

/**
 * NH5 props (no props)
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};

/**
 * NH5 does not emit any events
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const {
  component: NH5,
  genSD: genSDNH5,
  genDSD: genDSDNH5,
  define: defineNH5,
} = createCC<Props, Emits>("n-h5", () => {
  return () => (
    <Host style={[style, resetStyle]}>
      <h5 class="n-h5">
        <slot />
      </h5>
    </Host>
  );
});
