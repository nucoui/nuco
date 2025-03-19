<script lang="tsx" setup>
import type { OptionHTMLAttributes } from "vue";
import { useCe } from "@/composables/useCe";
import MaterialSymbolsCheckCircleRounded from "~icons/material-symbols/check-circle-rounded?width=1.5rem&height=1.5rem";
import { ref } from "vue";

export type Props = {
  value: OptionHTMLAttributes["value"];
  disabled?: boolean;
  selected?: boolean;
};

export type Emits = never;

const definedProps = withDefaults(defineProps<Props>(), {});
// const emit = defineEmits<EventEmitHelper<Emits>>();
const hostRef = ref<HTMLInputElement | null>(null);
const {
  host: _host,
  shadowRoot: _shadowRoot,
  internals: _internals,
  props,
} = useCe(hostRef, definedProps, () => {});

defineRender(() => (
  <div
    ref={hostRef}
    role="option"
    part="n-option"
    class="n-option"
    aria-disabled={props.value.disabled}
    aria-selected={props.value.selected}
    tabindex={0}
  >
    <slot />
    {
      props.value.selected && (
        <MaterialSymbolsCheckCircleRounded />
      )
    }
  </div>
));
</script>

<style lang="scss">
.n-option {
  position: relative;
  display: grid;
  grid-auto-flow: column;
  gap: var(--n-2);
  align-items: center;
  justify-content: space-between;
  padding: var(--n-2) var(--n-5);
  cursor: pointer;
  border-radius: var(--n-1);

  &::after {
    position: absolute;
    inset: 0;
    content: "";
    border-radius: var(--n-1);
    outline: 1px solid var(--cs-neutral-600);
    outline-offset: 0;
    opacity: 0;
    transition: all 0.1s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &[aria-selected="true"] {
    font-weight: 500;
    color: var(--cs-background-primary);
    background: var(--cs-neutral-700);
  }

  &[aria-disabled] {
    color: var(--cs-text-secondary);
    cursor: not-allowed;
  }

  &:not([aria-disabled]):focus,
  &:not([aria-disabled]):focus-visible,
  &:not([aria-disabled]):hover {
    &::after {
      outline-offset: 2px;
      opacity: 1;
    }
  }
}
</style>
