<script setup lang="tsx">
import clsx from "clsx";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, useHost, useId } from "vue";
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
const {
  type = "button",
  variant = "primary",
  disabled,
  href,
  target,
} = defineProps<Props>();

const id = useId();
const host = useHost();

const handleClick = () => {
  if (type === "submit") {
    host?.closest("form")?.requestSubmit();
  }
};

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
          onClick={handleClick}
        >
          <span class="contents">
            <slot />
          </span>
        </button>
      )
));
</script>

<style lang="scss">
@import url("/src/styles/reset.css");
@import url("/src/styles/base.css");

:host {
  box-sizing: border-box;
  width: auto;
}

.nuko-button {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: var(--n-3) var(--n-4);
  line-height: 1.25;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: none;
  border-radius: var(--n-2);
  outline: none;
  transition: all 0.2s ease-in-out;

  &:not([disabled]):focus,
  &:not([disabled]):hover {
    &::after {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      content: "";
      border-radius: var(--n-2);
      outline: 2px solid var(--cs-border-primary);
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
    color: var(--cs-neutral-100);
    background-color: var(--cs-neutral-900);

    &[disabled] {
      color: var(--cs-neutral-600);
      cursor: not-allowed;
      background-color: var(--cs-neutral-400);
    }

    &:not([disabled]):hover {
      background-color: var(--cs-neutral-800);
    }
  }

  &.-secondary {
    color: var(--cs-neutral-900);
    background-color: rgba(var(--cs-neutral-900), 0);
    outline: 1px solid var(--cs-neutral-400);

    &[disabled] {
      color: var(--cs-neutral-400);
      cursor: not-allowed;
      background-color: var(--cs-neutral-100);
    }

    &:not([disabled]):hover {
      background-color: color-mix(in srgb, var(--cs-neutral-900) 5%, transparent);
    }
  }

  &.-error {
    color: var(--p-neutral-100);
    background-color: var(--p-red-600);

    &[disabled] {
      color: var(--p-red-200);
      cursor: not-allowed;
      background-color: var(--p-red-400);
    }

    &:not([disabled]):hover {
      background-color: var(--p-red-700);
    }
  }

  > .contents {
    display: flex;
    gap: var(--n-1);
    justify-content: center;
    font-weight: 500;
  }
}
</style>
