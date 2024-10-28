<script setup lang="tsx">
import type { ButtonHTMLAttributes } from "vue";
import "@nuko/variable/css/variable.css";

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
.nuko-button {
  background-color: var(--p-natural-900);
  color: var(--p-natural-200);
}
</style>
