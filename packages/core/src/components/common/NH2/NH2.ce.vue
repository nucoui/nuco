<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import { ref } from "vue";

export type Emits = never;

const hostRef = ref<HTMLInputElement | null>(null);
useCe(hostRef, {});

defineRender(() => (
  <h2 ref={hostRef}>
    <slot />
  </h2>
));
</script>

<style lang="scss">
h2 {
  font-size: var(--n-7);
  line-height: 1.75;
}
</style>
