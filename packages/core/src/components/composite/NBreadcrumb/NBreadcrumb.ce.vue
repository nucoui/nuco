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
  <ol ref={hostRef} class="n-breadcrumb">
    <slot />
  </ol>
));
</script>

<style lang="scss">
.n-breadcrumb {
  display: flex;
  gap: var(--n-2);
  align-items: center;

  ::slotted(n-li) {
    display: flex;
    align-items: baseline;
    font-size: var(--n-3);
    color: var(--cs-text-secondary);

    &::before {
      display: inline-block;
      margin-right: var(--n-2);
      content: ">";
    }
  }

  ::slotted(n-li:first-child) {
    &::before {
      content: none;
    }
  }

  ::slotted(n-li:last-child) {
    color: var(--cs-text-primary);

    &::before {
      font-weight: normal;
      color: var(--cs-text-secondary);
    }
  }
}
</style>
