<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};
export type Emits = never;

useCe({}, () => {});

defineRender(() => (
  <h6 class="n-h6">
    <slot />
  </h6>
));
</script>

<style lang="scss">
.n-h6 {
  margin-top: var(--n-2);
  font-size: var(--n-3);
  font-weight: bold;
  line-height: 1.5;
}
</style>
