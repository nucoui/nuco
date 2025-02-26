<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import { ref } from "vue";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};
export type Emits = never;

const hostRef = ref<HTMLInputElement | null>(null);
useCe(hostRef, {}, () => {});

defineRender(() => (
  <li ref={hostRef} part="li">
    <slot />
  </li>
));
</script>

<style lang="scss">
@import "src/styles/reset.css";
@import "src/styles/base.css";
</style>
