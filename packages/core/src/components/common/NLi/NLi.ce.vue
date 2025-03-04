<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import clsx from "clsx";
import { ref } from "vue";

export type Props = {
  marker?: "none" | "disc" | "decimal";
};
export type Emits = never;

const definedProps = withDefaults(defineProps<Props>(), {});
const hostRef = ref<HTMLInputElement | null>(null);
const { props } = useCe(hostRef, definedProps, () => {});

defineRender(() => (
  <li
    ref={hostRef}
    part="li"
    class={clsx("n-li", props.value.marker && `-marker-${props.value.marker}`)}
  >
    <slot />
  </li>
));
</script>

<style lang="scss">
.n-li {
  &.-marker-none {
    list-style-type: none;
  }

  &.-marker-disc {
    list-style-type: disc;
  }

  &.-marker-decimal {
    list-style-type: decimal-leading-zero;
  }
}
</style>
