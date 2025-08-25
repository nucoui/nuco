import { createCC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NBreadcrumb.scss?raw";

/**
 * NBreadcrumb props (no props)
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};

/**
 * NBreadcrumb does not emit any events
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const {
  component: NBreadcrumb,
  genSD: genSDNBreadcrumb,
  genDSD: genDSDNBreadcrumb,
  define: defineNBreadcrumb,
} = createCC<Props, Emits>("n-breadcrumb", () => {
  return () => (
    <Host shadowRoot style={[style, resetStyle]}>
      <ol class="n-breadcrumb">
        <slot />
      </ol>
    </Host>
  );
});
