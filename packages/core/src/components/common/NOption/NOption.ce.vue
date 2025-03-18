<script lang="tsx" setup>
import type { OptionHTMLAttributes } from "vue";
import { useCe } from "@/composables/useCe";
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
  </div>
));
</script>

<style lang="scss">
.n-option {
  position: relative;
  padding: var(--n-2) var(--n-5);
  cursor: pointer;

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
