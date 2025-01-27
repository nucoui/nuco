<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import { ref } from "vue";

export type Emits = never;

const hostRef = ref<HTMLInputElement | null>(null);
useCe(hostRef, {}, () => {});

defineRender(() => (
  <h5 ref={hostRef}>
    <slot />
  </h5>
));
</script>

<style lang="scss">
h5 {
  font-size: var(--n-4);
  line-height: 1.75;
}
</style>
