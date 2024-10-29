<script setup lang="tsx">
import clsx from "clsx";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, useId } from "vue";
import "@nuko/variable/css/variable.css";

type Props = {
  variant?: "primary" | "secondary" | "error";
  disabled?: boolean;
} & ({
  type?: "anchor";
  href?: string;
  target?: AnchorHTMLAttributes["target"];
} | {
  type?: ButtonHTMLAttributes["type"];
  href?: never;
  target?: never;
});

const { type = "button", variant = "primary", disabled, href, target } = defineProps<Props>();

const id = useId();

defineRender(() => (
  type === "anchor"
    ? (
        <a
          part={id}
          class={clsx("nuko-button", "-anchor", `-${variant}`)}
          href={href}
          target={target}
        >
          <span class="contents">
            <slot />
          </span>
        </a>
      )
    : (
        <button
          part={id}
          type={type}
          class={clsx("nuko-button", `-${variant}`)}
          disabled={disabled}
        >
          <span class="contents">
            <slot />
          </span>
        </button>
      )
));
</script>

<style lang="scss" scoped>
@import url("/src/styles/reset.css");
@import url("/src/styles/base.css");

:host {
  width: fit-content;
}

.nuko-button {
  position: relative;
  line-height: 1.25;
  padding: var(--n-3) var(--n-4);
  border-radius: var(--n-2);
  cursor: pointer;
  background-color: transparent;
  transition: all 0.1s ease-in-out;
  user-select: none;
  border: none;
  outline: none;
  display: inline-block;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  &:not([disabled]):focus,
  &:not([disabled]):hover {
    &::after {
      position: absolute;
      content: "";
      height: 100%;
      width: 100%;
      inset: 0;
      border-radius: var(--n-2);
      outline: 2px solid var(--p-natural-400);
      outline-offset: 2px;
      transition: all 0.1s ease-in-out;
    }
  }

  &:not([disabled]):active {
    transform: scale(0.98);
  }

  &.-anchor {
    text-decoration: underline dashed;
  }

  &.-primary {
    background-color: var(--p-natural-900);
    color: var(--p-natural-100);

    &[disabled] {
      background-color: var(--p-natural-400);
      color: var(--p-natural-600);
      cursor: not-allowed;
    }

    &:not([disabled]):hover {
      background-color: var(--p-natural-800);
    }
  }

  &.-secondary {
    background-color: rgba(var(--p-natural-900), 0);
    color: var(--p-natural-900);
    outline: 1px solid var(--p-natural-400);

    &[disabled] {
      background-color: var(--p-natural-100);
      color: var(--p-natural-400);
      cursor: not-allowed;
    }

    &:not([disabled]):hover {
      background-color: color-mix(in srgb, var(--p-natural-900) 5%, transparent);
    }
  }

  &.-error {
    background-color: var(--p-red-600);
    color: var(--p-natural-100);

    &[disabled] {
      background-color: var(--p-red-400);
      color: var(--p-red-200);
      cursor: not-allowed;
    }

    &:not([disabled]):hover {
      background-color: var(--p-red-700);
    }
  }

  > .contents {
    display: flex;
    gap: var(--n-1);
    font-weight: 500;
  }
}
</style>
