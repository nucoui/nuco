<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};
export type Emits = never;

useCe({}, () => {});

defineRender(() => (
  <h5 class="n-h5">
    <slot />
  </h5>
));
</script>

<style lang="scss">
.n-h5 {
  margin-top: var(--n-3);
  font-size: var(--n-4);
  font-weight: bold;
  line-height: 1.5;
}
</style>
