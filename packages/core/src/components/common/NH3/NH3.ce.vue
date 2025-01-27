<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import { ref } from "vue";

export type Emits = never;

const hostRef = ref<HTMLInputElement | null>(null);
useCe(hostRef, {}, () => {});

defineRender(() => (
  <h3 ref={hostRef}>
    <slot />
  </h3>
));
</script>

<style lang="scss">
h3 {
  font-size: var(--n-6);
  line-height: 1.75;
}
</style>
