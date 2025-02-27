<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import MaterialSymbolsChevronRightRounded from "~icons/material-symbols/chevron-right-rounded?width=1.5rem&height=1.5rem";
import { ref, useId } from "vue";

export type Props = {
  isDefaultOpen?: boolean;
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

const isOpen = ref(props.value.isDefaultOpen);

const id = useId();
const buttonId = useId();

const handleClick = () => {
  isOpen.value = !isOpen.value;
};

defineRender(() => (
  <div ref={hostRef}>
    <h3 class="summary">
      <button
        type="button"
        id={buttonId}
        aria-expanded={isOpen.value}
        aria-controls={id}
        onClick={handleClick}
        class="button"
      >
        <slot name="summary">
          summary
        </slot>
        <MaterialSymbolsChevronRightRounded class="arrow" />
      </button>
    </h3>
    <div
      id={id}
      aria-labelledby={buttonId}
      role="region"
      class="detail"
      data-hidden={!isOpen.value}
    >
      <div class="inner">
        <div class="stroke" />
        <slot />
      </div>
    </div>
  </div>
));
</script>

<style lang="scss">
.summary {
  > .button {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    width: 100%;
    padding: var(--n-2) var(--n-4);
    cursor: pointer;
    border-radius: var(--n-2);
    transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);

    &:focus,
    &:hover {
      background-color: color-mix(in srgb, var(--cs-neutral-900) 5%, transparent);
    }

    > .arrow {
      color: var(--cs-text-secondary);
      transition: 0.2s;
      transform: rotate(0deg);
      transform-origin: center center;
    }

    &[aria-expanded="true"] > .arrow {
      transform: rotate(90deg);
    }
  }
}

.detail {
  display: block grid;
  grid-template-rows: 1fr;
  padding: var(--n-2) var(--n-4) 0;
  transition: 0.3s;

  &[data-hidden="true"] {
    grid-template-rows: 0fr;
    padding: 0 var(--n-4);
  }

  > .inner {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--n-2);
    overflow: hidden;

    > .stroke {
      width: 2px;
      height: 100%;
      margin: 0 var(--n-1);
      background-color: var(--cs-border-secondary);
      border-radius: calc(infinity * 1px);
    }
  }
}
</style>
