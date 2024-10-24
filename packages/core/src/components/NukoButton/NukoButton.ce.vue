<script setup lang="tsx">
import type { ButtonHTMLAttributes } from "vue";

interface Props {
  type: ButtonHTMLAttributes["type"];
}
const { type = "button" } = defineProps<Props>();

defineRender(() => (
  <button type={type} class="nuko-button">
    <slot />
  </button>
));
</script>

<style lang="scss" scoped>
</style>
