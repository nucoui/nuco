<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};
export type Emits = never;

useCe({}, () => {});

defineRender(() => (
  <h2 class="n-h2">
    <slot />
  </h2>
));
</script>

<style lang="scss">
.n-h2 {
  margin-top: var(--n-6);
  font-size: var(--n-7);
  font-weight: bold;
  line-height: 1.5;
}
</style>
