<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import { ref } from "vue";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};
export type Emits = never;

const hostRef = ref<HTMLInputElement | null>(null);
useCe(hostRef, {}, () => {});

defineRender(() => (
  <h5 ref={hostRef} class="n-h5">
    <slot />
  </h5>
));
</script>

<style lang="scss">
@import "src/styles/reset.css";
@import "src/styles/base.css";

.n-h5 {
  font-size: var(--n-4);
  line-height: 1.75;
}
</style>
