<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import { ref } from "vue";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};
export type Emits = never;

const hostRef = ref<HTMLInputElement | null>(null);
useCe(hostRef, {}, () => {});

defineRender(() => (
  <h1 ref={hostRef} class="n-h1">
    <slot />
  </h1>
));
</script>

<style lang="scss">
.n-h1 {
  margin-top: var(--n-7);
  font-size: var(--n-8);
  font-weight: bold;
  line-height: 1.5;
}
</style>
