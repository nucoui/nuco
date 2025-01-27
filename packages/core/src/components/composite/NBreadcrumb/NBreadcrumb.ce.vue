<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import { ref } from "vue";

export type Props = {};

const definedProps = withDefaults(defineProps<Props>(), {});
const hostRef = ref<HTMLInputElement | null>(null);

useCe(hostRef, definedProps, () => {});

defineRender(() => (
  <ol ref={hostRef}>
    <slot />
  </ol>
));
</script>

<style lang="scss">
ol {
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  list-style: none;
}
</style>
