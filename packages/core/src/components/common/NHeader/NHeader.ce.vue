<script lang="tsx" setup>
import type { EventEmitHelper } from "@/types/emit/EventEmit/EventEmits";
import { useCe } from "@/composables/useCe";
import { ref } from "vue";

export type Props = {
  isLogo?: boolean;
  isNavToggle?: boolean;
  isMiddle?: boolean;
};

export type Emits = "clickNav";

const definedProps = withDefaults(defineProps<Props>(), {
  isLogo: true,
  isNavToggle: true,
  isMiddle: true,
});
const emit = defineEmits<EventEmitHelper<Emits>>();
const hostRef = ref<HTMLInputElement | null>(null);
const {
  props,
  customEventEmit,
} = useCe(hostRef, definedProps, emit);

defineRender(() => (
  <header ref={hostRef}>
    {props.value.isLogo
    && (
      <slot name="logo">
        <span>@nuco/core</span>
      </slot>
    )}

    {props.value.isMiddle
    && (
      <div>
        <slot name="middle" />
      </div>
    )}

    {props.value.isNavToggle && (
      <div>
        <button onClick={e => customEventEmit("onClickNav", e)}>
          <slot name="nav-toggle-icon" />
        </button>
      </div>
    )}
  </header>
));
</script>

<style lang="scss">
@import "src/styles/reset.css";
@import "src/styles/base.css";

header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--n-2);
  align-items: center;
  width: 100%;
  height: 64px;
  padding: var(--n-4) var(--n-6);
  background-color: color-mix(in srgb, var(--cs-background-primary) 90%, transparent);
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  border: 1px solid var(--cs-border-secondary);
  border-radius: calc(infinity * 1px);
}
</style>
