import { createCC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import { toMatched } from "chatora/util";
import clsx from "clsx";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NLi.scss?raw";

/**
 * Props for NLi component
 */
export type Props = {
  /**
   * Marker style for list item
   */
  marker?: "none" | "disc" | "decimal";
};

/**
 * NLi does not emit any events
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const {
  component: NLi,
  genSD: genSDNLi,
  genDSD: genDSDNLi,
  define: defineNLi,
} = createCC<Props, Emits>("n-li", ({ defineProps }) => {
  const props = defineProps({
    marker: v => toMatched(v, ["none", "disc", "decimal"]),
  });

  return () => (
    <Host style={[style, resetStyle]}>
      <li
        part="li"
        class={clsx("n-li", props().marker && `-marker-${props().marker}`)}
      >
        <slot />
      </li>
    </Host>
  );
});
