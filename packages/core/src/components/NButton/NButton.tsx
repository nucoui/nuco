import { computed, createCC, getHost } from "chatora";
import { Host } from "chatora/jsx-runtime";
import { toBoolean, toMatched, toString } from "chatora/util";
import clsx from "clsx";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NButton.scss?raw";

/**
 * Props for NButton component
 */
export type Props = {
  /**
   * Button variant (color theme)
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "tertiary" | "error";
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Button width style
   * @default "auto"
   */
  width?: "auto" | "stretch";
  /**
   * Button size
   * @default "medium"
   */
  size?: "small" | "medium" | "large";
} & ({
  /**
   * Use anchor element
   */
  type?: "anchor";
  /**
   * Anchor href
   */
  href?: string;
  /**
   * Anchor target
   */
  target?: string;
} | {
  /**
   * Button type
   * @default "button"
   */
  type?: "submit" | "reset" | "button";
  href?: never;
  target?: never;
});

/**
 * Emits for NButton component
 */
export type Emits = {
  /**
   * Fired when the button is clicked
   */
  "on-click"?: Event;
};

export const {
  component: NButton,
  genSD: genSDNButton,
  genDSD: genDSDNButton,
  define: defineNButton,
} = createCC<Props, Emits>("n-button", ({ defineProps, defineEmits }) => {
  const props = defineProps({
    type: v => toMatched(v, ["anchor", "submit", "reset", "button"]) ?? "button",
    variant: v => toMatched(v, ["primary", "secondary", "tertiary", "error"]) ?? "primary",
    disabled: v => toBoolean(v) ?? false,
    width: v => toMatched(v, ["auto", "stretch"]) ?? "auto",
    size: v => toMatched(v, ["small", "medium", "large"]) ?? "medium",
    href: v => toString(v),
    target: v => toString(v),
  });

  const emits = defineEmits({
    "on-click": () => {},
  });

  const host = getHost();

  /**
   * Handle click event for button and anchor
   */
  const handleClick = (e: Event) => {
    emits("on-click", e);
    if (props().type === "submit") {
      host.value?.closest("form")?.requestSubmit();
    }
  };

  /**
   * Handle keydown event for accessibility
   */
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleClick(e);
    }
  };

  const commonAttrs = computed(() => ({
    "class": clsx(
      "n-button",
      `-${props().size}`,
      `-${props().variant}`,
      {
        "-anchor": props().type === "anchor",
        "-auto": props().width === "auto",
      },
    ),
    "disabled": props().disabled,
    "aria-disabled": props().disabled,
    "onKeydown": props().disabled ? undefined : handleKeydown,
    "onClick": props().disabled ? undefined : handleClick,
  }));

  return () => {
    const type = props().type;

    switch (type) {
      case "anchor": {
        return (
          <Host shadowRoot shadowRootMode="open" style={[style, resetStyle]}>
            <a
              {...commonAttrs.value}
              tabindex={props().disabled ? -1 : 0}
              href={props().disabled ? undefined : props().href}
              target={props().target}
            >
              <span class="contents">
                <slot />
              </span>
            </a>
          </Host>
        );
      }
      default: {
        return (
          <Host shadowRoot shadowRootMode="open" style={[style, resetStyle]}>
            <button
              {...commonAttrs.value}
              type={type}
            >
              <span class="contents">
                <slot />
              </span>
            </button>
          </Host>
        );
      }
    }
  };
});
