import { createCC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import { toMatched } from "chatora/util";
import clsx from "clsx";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NUl.scss?raw";

/**
 * Props for NUl component
 */
export type Props = {
  /**
   * List style type
   * @default "disc"
   */
  type?: "none" | "disc" | "decimal";
};

/**
 * Emits for NUl component (none)
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const {
  component: NUl,
  genSD: genSDNUl,
  genDSD: genDSDNUl,
  define: defineNUl,
} = createCC<Props, Emits>("n-ul", ({ defineProps }) => {
  const props = defineProps({
    type: v => toMatched(v, ["none", "disc", "decimal"]) ?? "disc",
  });

  return () => (
    <Host style={[style, resetStyle]}>
      <ul class={clsx("n-ul", `-type-${props().type}`)}>
        <slot />
      </ul>
    </Host>
  );
});
