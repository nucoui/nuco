<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};
export type Emits = never;

useCe({}, () => {});

defineRender(() => (
  <h4 class="n-h4">
    <slot />
  </h4>
));
</script>

<style lang="scss">
.n-h4 {
  margin-top: var(--n-4);
  font-size: var(--n-5);
  font-weight: bold;
  line-height: 1.5;
}
</style>
