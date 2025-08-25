import { createCC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import { toBoolean, toMatched, toString } from "chatora/util";
import clsx from "clsx";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NDivider.scss?raw";

/**
 * Props for NDivider component
 */
export type Props = {
  /**
   * Whether the divider is vertical
   * @default false
   */
  vertical?: boolean;
  /**
   * Text content to display in the divider
   */
  text?: string;
  /**
   * Position of the text within the divider
   * @default "start"
   */
  textPosition?: "start" | "center" | "end";
};

/**
 * NDivider does not emit any events
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const {
  component: NDivider,
  genSD: genSDNDivider,
  genDSD: genDSDNDivider,
  define: defineNDivider,
} = createCC<Props, Emits>("n-divider", ({ defineProps }) => {
  const props = defineProps({
    vertical: v => toBoolean(v) ?? false,
    text: v => toString(v),
    textPosition: v => toMatched(v, ["start", "center", "end"]) ?? "start",
  });

  return () => (
    <Host shadowRoot shadowRootMode="open" style={[style, resetStyle]}>
      <div
        class={clsx("n-divider", `-text-${props().textPosition}`, {
          "-vertical": props().vertical,
        })}
      >
        {props().text}
      </div>
    </Host>
  );
});
