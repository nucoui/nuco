<script setup lang="tsx">
import clsx from "clsx";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, computed, ref, useId } from "vue";
import { useCe } from "../../composables/useCe";

export type Props = {
  variant?: "primary" | "secondary" | "error";
  disabled?: boolean;
} & ({
  type?: "anchor";
  href?: string;
  target?: AnchorHTMLAttributes["target"];
} | {
  type?: ButtonHTMLAttributes["type"] | "toggle";
  href?: never;
  target?: never;
});

export type Emits = never;

const definedProps = withDefaults(defineProps<Props>(), {
  type: "button",
  variant: "primary",
  disabled: false,
});

const buttonRef = ref<HTMLButtonElement | null>(null);

const id = useId();
const { host, props } = useCe(buttonRef, definedProps);

const handleClick = () => {
  if (props.value.type === "submit") {
    host?.closest("form")?.requestSubmit();
  }
};

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    handleClick();
  }
};

const commonAttrs = computed(() => ({
  "ref": buttonRef,
  "part": id,
  "class": clsx("nuko-button", `-${props.value.variant}`, {
    "-anchor": props.value.type === "anchor",
    "-toggle": props.value.type === "toggle",
  }),
  "aria-disabled": props.value.disabled,
  "onKeydown": handleKeydown,
}));

defineRender(() => {
  switch (props.value.type) {
    case "anchor": {
      return (
        <a
          {...commonAttrs.value}
          tabindex={props.value.disabled ? -1 : 0}
          href={props.value.href}
          target={props.value.target}
        >
          <span class="contents">
            <slot />
          </span>
        </a>
      );
    }
    case "toggle": {
      return (
        <button
          {...commonAttrs.value}
          type="button"
          disabled={props.value.disabled}
        >
          <span class="contents">
            <slot />
          </span>
        </button>
      );
    }
    default: {
      return (
        <button
          {...commonAttrs.value}
          type={props.value.type}
          disabled={props.value.disabled}
          onClick={handleClick}
        >
          <span class="contents">
            <slot />
          </span>
        </button>
      );
    }
  }
});
</script>

<style scoped lang="scss">
/* :host {
  box-sizing: border-box;
  width: -moz-available;
  width: -webkit-fill-available;
  width: stretch;
} */

.nuko-button {
  position: relative;
  box-sizing: border-box;
  width: -moz-available;
  width: -webkit-fill-available;
  width: stretch;
  padding: var(--n-3) var(--n-4);
  line-height: 1.25;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: none;
  border-radius: var(--n-2);
  outline: none;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:not([disabled]):focus,
  &:not([disabled]):hover {
    &::after {
      position: absolute;
      inset: 0;
      content: "";
      border-radius: var(--n-2);
      outline: 1px solid var(--cs-neutral-600);
      outline-offset: 2px;
      transition: all 0.1s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
  }

  &:not([disabled]):active {
    transform: scale(0.99);
  }

  &.-anchor {
    display: inline-block;
    text-decoration: underline dashed;
  }

  &.-primary,
  &.-secondary,
  &.-error {
    &[disabled] {
      cursor: not-allowed;
    }
  }

  &.-primary {
    color: var(--cs-neutral-100);
    background-color: var(--cs-neutral-900);

    &[disabled] {
      color: var(--cs-neutral-600);
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
      background-color: var(--cs-neutral-100);
    }

    &:not([disabled]):hover {
      background-color: color-mix(in srgb, var(--cs-neutral-900) 5%, transparent);
    }

    &:not([disabled]):focus-visible,
    :not([disabled]):focus {
      outline-offset: 0;
    }
  }

  &.-error {
    color: var(--p-neutral-100);
    background-color: var(--p-red-600);

    &[disabled] {
      color: var(--p-red-200);
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
