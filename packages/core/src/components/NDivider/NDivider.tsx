import type { CC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import { toBoolean, toMatched, toString } from "chatora/util";
import clsx from "clsx";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NDivider.scss?raw";

/**
 * Props for the NDivider component
 */
export type Props = {
  /** Whether the divider is vertical */
  vertical?: boolean;
  /** Text content to display in the divider */
  text?: string;
  /** Position of the text within the divider */
  textPosition?: "start" | "center" | "end";
};

/**
 * Events emitted by the NDivider component
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

/**
 * A divider component that can display horizontally or vertically with optional text
 * @param param0 - The component configuration object
 * @param param0.defineProps - Function to define component props
 * @returns The NDivider component
 */
export const NDivider: CC<Props, Emits> = ({
  defineProps,
}) => {
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
};
