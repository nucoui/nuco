import type { CC } from "chatora";
import { toBoolean, toMatched, toString } from "@chatora/util";
import clsx from "clsx";

export type Props = {
  variant?: "primary" | "secondary" | "tertiary" | "error";
  disabled?: boolean;
  width?: "auto" | "stretch";
  size?: "small" | "medium" | "large";
} & ({
  type?: "anchor";
  href?: string;
  target?: string;
} | {
  type?: "submit" | "reset" | "button";
  href?: never;
  target?: never;
});

export type Emits = {
  "on-click": Event;
};

export const Button: CC<Props, Emits> = ({
  reactivity: { computed },
  defineEmits,
  defineProps,
  getHost,
  render,
}) => {
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

  const handleClick = (e: Event) => {
    emits("on-click", e);
    if (props().type === "submit") {
      host?.closest("form")?.requestSubmit();
    }
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleClick(e);
    }
  };

  const commonAttrs = computed(() => ({
    "class": clsx("n-button", `-${props().size}`, `-${props().variant}`, {
      "-anchor": props().type === "anchor",
      "-auto": props().width === "auto",
    }),
    "disabled": props().disabled,
    "aria-disabled": props().disabled,
    "onKeydown": props().disabled ? undefined : handleKeydown,
    "onClick": props().disabled ? undefined : handleClick,
  }));

  render(() => {
    const type = props().type;

    switch (type) {
      case "anchor": {
        return (
          <a
            {...commonAttrs()}
            tabindex={props().disabled ? -1 : 0}
            href={props().disabled ? undefined : props().href}
            target={props().target}
          >
            <span class="contents">
              <slot />
            </span>
          </a>
        );
      }
      default: {
        return (
          <button
            {...commonAttrs()}
            type={type}
          >
            <span class="contents">
              <slot />
            </span>
          </button>
        );
      }
    }
  });
};
