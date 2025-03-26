<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import { ref } from "vue";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};
export type Emits = never;

const hostRef = ref<HTMLInputElement | null>(null);
useCe(hostRef, {}, () => {});

defineRender(() => (
  <h4 ref={hostRef} class="n-h4">
    <slot />
  </h4>
));
</script>

<style lang="scss">
.n-h4 {
  margin: var(--n-2) 0;
  font-size: var(--n-5);
  font-weight: bold;
  line-height: 1.5;
}
</style>
