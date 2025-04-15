<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";

export type Props = {
  isLogo?: boolean;
  isNavToggle?: boolean;
  isMiddle?: boolean;
};

export type Emits = never;

const definedProps = withDefaults(defineProps<Props>(), {
  isLogo: true,
  isNavToggle: true,
  isMiddle: true,
});
// const emit = defineEmits<EventEmitHelper<Emits>>();
const {
  props,
} = useCe(definedProps, () => {});

defineRender(() => (
  <header>
    {props.value.isLogo
    && (
      <slot name="left">
        <span>@nuco/core</span>
      </slot>
    )}

    {props.value.isMiddle
    && (
      <div>
        <slot name="center" />
      </div>
    )}

    {props.value.isNavToggle && (
      <div>
        <div>
          <slot name="right" />
        </div>
      </div>
    )}
  </header>
));
</script>

<style lang="scss">
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
  border: 1px solid var(--cs-border-tertiary);
  border-radius: var(--n-4);
}
</style>
