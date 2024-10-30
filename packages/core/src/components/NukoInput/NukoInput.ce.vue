<script lang="tsx" setup>
import type { InputHTMLAttributes } from "vue";

interface Props {
  type?: InputHTMLAttributes["type"];
};
const { type = "text" } = defineProps<Props>();

defineRender(() => (
  <input
    type={type}
    class="nuko-input"
  />
));
</script>
