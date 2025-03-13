<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import { ref } from "vue";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};
export type Emits = never;

const hostRef = ref<HTMLInputElement | null>(null);
useCe(hostRef, {}, () => {});

defineRender(() => (
  <h6 ref={hostRef} class="n-h6">
    <slot />
  </h6>
));
</script>

<style lang="scss">
.n-h6 {
  font-size: var(--n-3);
  font-weight: bold;
  line-height: 1.75;
}
</style>
