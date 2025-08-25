import { createCC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NH1.scss?raw";

/**
 * NH1 props (no props)
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};

/**
 * NH1 does not emit any events
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const {
  component: NH1,
  genSD: genSDNH1,
  genDSD: genDSDNH1,
  define: defineNH1,
} = createCC<Props, Emits>("n-h1", () => {
  return () => (
    <Host style={[style, resetStyle]}>
      <h1 class="n-h1">
        <slot />
      </h1>
    </Host>
  );
});
