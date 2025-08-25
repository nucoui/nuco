import { createCC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import { toMatched, toString } from "chatora/util";
import clsx from "clsx";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NBadge.scss?raw";

export type Props = {
  /**
   * Badge type (color theme)
   * @default "primary"
   */
  type?: "primary" | "secondary" | "tertiary" | "success" | "warning" | "error";
  /**
   * Text to display inside the badge
   */
  text: string;
};

/**
 * NBadge does not emit any events
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const {
  component: NBadge,
  genSD: genSDNBadge,
  genDSD: genDSDNBadge,
  define: defineNBadge,
} = createCC<Props, Emits>("n-badge", ({ defineProps }) => {
  const props = defineProps({
    type: v => toMatched(v, ["primary", "secondary", "tertiary", "success", "warning", "error"]) ?? "primary",
    text: v => toString(v) ?? "",
  });

  return () => (
    <Host shadowRoot style={[style, resetStyle]}>
      <span
        class={clsx(
          "n-badge",
          `-${props().type}`,
        )}
      >
        {props().text}
      </span>
    </Host>
  );
});
