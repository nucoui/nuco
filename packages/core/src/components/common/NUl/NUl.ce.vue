<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import { computed, ref } from "vue";

export type Props = {
  type: "none" | "disc" | "decimal";
};

export type Emits = never;

const definedProps = withDefaults(defineProps<Props>(), {
  type: "disc",
});
const hostRef = ref<HTMLInputElement | null>(null);
const { props } = useCe(hostRef, definedProps, () => {});

const listStyleType = computed(() => {
  switch (props.value.type) {
    case "none":
      return "none";
    case "disc":
      return "disc";
    case "decimal":
      return "decimal-leading-zero";
    default:
      return "disc";
  }
});

defineRender(() => (
  <ul ref={hostRef}>
    <slot />
  </ul>
));
</script>

<style lang="scss">
ul {
  padding-left: 2ch;
  margin: 1ch 0;
  list-style-type: v-bind("listStyleType");
}
</style>
