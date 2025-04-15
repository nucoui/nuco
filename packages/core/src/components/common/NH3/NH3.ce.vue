<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};
export type Emits = never;

useCe({}, () => {});

defineRender(() => (
  <h3 class="n-h3">
    <slot />
  </h3>
));
</script>

<style lang="scss">
.n-h3 {
  margin-top: var(--n-5);
  font-size: var(--n-6);
  font-weight: bold;
  line-height: 1.5;
}
</style>
