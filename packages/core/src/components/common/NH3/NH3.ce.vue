<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import { ref } from "vue";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};
export type Emits = never;

const hostRef = ref<HTMLInputElement | null>(null);
useCe(hostRef, {}, () => {});

defineRender(() => (
  <h3 ref={hostRef} class="n-h3">
    <slot />
  </h3>
));
</script>

<style lang="scss">
@import "src/styles/reset.css";
@import "src/styles/base.css";

.n-h3 {
  font-size: var(--n-6);
  line-height: 1.75;
}
</style>
