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
   */
  target?: "_blank" | "_self" | "_parent" | "_top";
  /**
   * The relationship of the linked URL
   */
  rel?: string;
  /**
   * Whether to show underline decoration
   */
  underline?: "none" | "solid" | "dashed" | "dotted";
  /**
   * Whether the link is disabled
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
          props().disabled && "disabled",
        )}
        href={props().disabled ? undefined : props().href}
        target={props().target}
        rel={props().rel}
        onClick={handleClick}
        aria-disabled={props().disabled}
      >
        <slot />
      </a>
    </Host>
  );
};
