<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import { ref } from "vue";

export type Emits = never;

const hostRef = ref<HTMLInputElement | null>(null);
useCe(hostRef, {}, () => {});

defineRender(() => (
  <h6 ref={hostRef}>
    <slot />
  </h6>
));
</script>

<style lang="scss">
h6 {
  font-size: var(--n-3);
  line-height: 1.75;
}
</style>
