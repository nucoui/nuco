<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import clsx from "clsx";

export type Props = {
  type: "none" | "disc" | "decimal";
};

export type Emits = never;

const definedProps = withDefaults(defineProps<Props>(), {
  type: "disc",
});
const { props } = useCe(definedProps, () => {});

defineRender(() => (
  <ul class={clsx("n-ul", `-type-${props.value.type}`)}>
    <slot />
  </ul>
));
</script>

<style lang="scss">
.n-ul {
  padding-left: 2ch;
  margin: 1ch 0;

  &.n-ul.-type-none {
    list-style-type: none;
  }

  &.n-ul.-type-disc {
    list-style-type: disc;
  }

  &.n-ul.-type-decimal {
    list-style-type: decimal-leading-zero;
  }

  ::slotted(n-li) {
    /* padding-inline-start: 0.1ch; */
    color: var(--cs-text-primary);
  }
}
</style>
