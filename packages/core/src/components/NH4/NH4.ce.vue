<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import { ref } from "vue";

export type Emits = never;

const hostRef = ref<HTMLInputElement | null>(null);
useCe(hostRef, {});

defineRender(() => (
  <h4 ref={hostRef}>
    <slot />
  </h4>
));
</script>

<style lang="scss">
h4 {
  font-size: var(--n-5);
  line-height: 1.75;
}
</style>
