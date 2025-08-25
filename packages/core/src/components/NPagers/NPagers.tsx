import { createCC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NPagers.scss?raw";

/**
 * NPagers props (no props)
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};

/**
 * NPagers does not emit any events
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const {
  component: NPagers,
  genSD: genSDNPagers,
  genDSD: genDSDNPagers,
  define: defineNPagers,
} = createCC<Props, Emits>("n-pagers", () => {
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
});
