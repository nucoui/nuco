import type { CC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import { toMatched, toString } from "chatora/util";
import clsx from "clsx";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NPager.scss?inline";

export type Props = {
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top" | "_unfencedTop";
  type: "prev" | "next";
};

export type Emits = {
  click: Event;
};

export const NPager: CC<Props, Emits> = ({ defineProps, defineEmits }) => {
  const props = defineProps({
    href: (v: string | undefined) => toString(v) ?? "",
    target: (v: string | undefined) => toMatched(v, ["_self", "_blank", "_parent", "_top", "_unfencedTop"] as const) ?? "_self",
    type: (v: string | undefined) => toMatched(v, ["prev", "next"] as const) ?? "prev",
  });

  const emit = defineEmits({
    click: (e: Event) => e,
  });

  const handleClick = (e: Event) => {
    emit("click", e);
  };

  return () => (
    <Host shadowRoot style={[style, resetStyle]}>
      <a
        href={props().href}
        target={props().target}
        class={clsx("n-pager", `-${props().type}`)}
        onClick={handleClick}
      >
        <span class="icon">
          {props().type === "prev"
            ? (
                <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z" />
                </svg>
              )
            : (
                <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z" />
                </svg>
              )}
        </span>
        <span class="type">
          {props().type === "prev" ? "Previous" : "Next"}
        </span>
        <span class="text">
          <slot>
            {props().type === "prev"
              ? "Go to Previous page"
              : "Go to Next page"}
          </slot>
        </span>
      </a>
    </Host>
  );
};
