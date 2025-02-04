<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import { ref } from "vue";

// eslint-disable-next-line ts/no-empty-object-type
export type Props = {};

export type Emits = never;

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
  gap: var(--n-2);
  align-items: center;

  ::slotted(n-li) {
    display: flex;
    align-items: baseline;

    &::before {
      display: inline-block;
      margin-right: var(--n-2);
      color: var(--cs-text-secondary);
      content: ">";
    }
  }

  ::slotted(n-li:first-child) {
    color: var(--cs-text-secondary) !important;

    &::before {
      content: none;
    }
  }

  ::slotted(n-li:last-child) {
    font-weight: bold;

    &::before {
      font-weight: normal;
    }
  }
}
</style>
