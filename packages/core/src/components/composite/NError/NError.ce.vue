<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import { ref } from "vue";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};

export type Emits = never;

const definedProps = withDefaults(defineProps<Props>(), {});
const hostRef = ref<HTMLInputElement | null>(null);
useCe(hostRef, definedProps, () => {});

defineRender(() => (
  <div ref={hostRef} class="n-error">
    <slot />
  </div>
));
</script>

<style lang="scss">
@import "src/styles/reset.css";
@import "src/styles/base.css";

.n-error {
  padding: var(--n-1) var(--n-2);
  font-size: var(--n-3);
  font-weight: 500;
  color: var(--p-red-100);
  background-color: color-mix(in srgb, var(--p-red-400) 20%, transparent);
  border-radius: var(--n-1);
}
</style>
