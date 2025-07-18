import type { CC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import { toBoolean, toMatched, toString } from "chatora/util";
import clsx from "clsx";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NAnchor.scss?raw";

export type Props = {
  /**
   * The URL that the hyperlink points to
   */
  href?: string;
  /**
   * Where to display the linked URL
   * @default undefined
   */
  target?: "_blank" | "_self" | "_parent" | "_top";
  /**
   * The relationship of the linked URL
   */
  rel?: string;
  /**
   * The style of the underline for the link
   * @default "none"
   */
  underline?: "none" | "solid" | "dashed" | "dotted";
  /**
   * Whether the link is disabled
   * @default false
   */
  disabled?: boolean;
};

export type Emits = {
  /**
   * Fired when the link is clicked
   */
  "on-click"?: Event;
};

export const NAnchor: CC<Props, Emits> = ({
  defineProps,
  defineEmits,
}) => {
  const props = defineProps({
    href: v => toString(v),
    target: v => toMatched(v, ["_blank", "_self", "_parent", "_top"]),
    rel: v => toString(v),
    underline: v => toMatched(v, ["none", "solid", "dashed", "dotted"]) ?? "none",
    disabled: v => toBoolean(v) ?? false,
  });

  const emits = defineEmits({
    "on-click": () => {},
  });

  const handleClick = (event: Event) => {
    if (props().disabled) {
      event.preventDefault();
    }
    else {
      emits("on-click", event);
    }
  };

  return () => (
    <Host shadowRoot style={[style, resetStyle]}>
      <a
        class={clsx(
          "n-anchor",
          `-${props().underline}`,
        )}
        href={props().disabled ? undefined : props().href}
        target={props().target}
        rel={props().rel}
        onClick={handleClick}
        aria-disabled={props().disabled}
      >
        <slot />
        {props().target === "_blank" && (
          <svg class="blank" xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4t-.288.713T11 5H5v14h14v-6q0-.425.288-.712T20 12t.713.288T21 13v6q0 .825-.587 1.413T19 21zM19 6.4L10.4 15q-.275.275-.7.275T9 15t-.275-.7t.275-.7L17.6 5H15q-.425 0-.712-.288T14 4t.288-.712T15 3h5q.425 0 .713.288T21 4v5q0 .425-.288.713T20 10t-.712-.288T19 9z" /></svg>
        )}
      </a>
    </Host>
  );
};
