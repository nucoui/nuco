<script lang="tsx" setup>
import { ref } from "vue";
import { useCe } from "../../composables/useCe";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};

export type Emits = never;

const definedProps = withDefaults(defineProps<Props>(), {});
const hostRef = ref<HTMLInputElement | null>(null);
useCe(hostRef, definedProps);

defineRender(() => (
  <div ref={hostRef} class="nuko-error">
    <slot />
  </div>
));
</script>

<style lang="scss">
.nuko-error {
  padding: var(--n-1) var(--n-2);
  font-size: var(--n-3);
  font-weight: 500;
  color: var(--p-red-100);
  background-color: color-mix(in srgb, var(--p-red-500) 70%, transparent);
  border-radius: var(--n-2);
}
</style>
