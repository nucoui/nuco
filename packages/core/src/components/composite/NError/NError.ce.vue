<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};

export type Emits = never;

const definedProps = withDefaults(defineProps<Props>(), {});

useCe(definedProps, () => {});

defineRender(() => (
  <div class="n-error">
    <slot />
  </div>
));
</script>

<style lang="scss">
.n-error {
  padding: var(--n-1) var(--n-2);
  font-size: var(--n-3);
  font-weight: 500;
  color: var(--p-red-100);
  background-color: color-mix(in srgb, var(--p-red-400) 20%, transparent);
  border-radius: var(--n-1);
}
</style>
