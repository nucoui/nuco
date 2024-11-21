import type { defineProps, Ref } from "vue";
import { computed, onMounted, ref, useHost, useShadowRoot } from "vue";
import { baseAdoptedStyleSheets, resetAdoptedStyleSheets } from "../utils/adoptedStyleSheets";

export const useCe = <Props extends ReturnType<typeof defineProps>>(mainRef: Ref<HTMLElement | null>, props: Props) => {
  const parsedProps = computed(() => {
    const rest = Object.fromEntries(
      Object.entries(props).filter(([_key, value]) => {
        return value !== undefined && value !== false;
      }),
    );

    return rest as Props;
  });

  const host = useHost();
  const shadowRoot = useShadowRoot();
  const internals = ref<ElementInternals | null>(null);

  onMounted(() => {
    if (mainRef.value) {
      const attachedInternals = host?.attachInternals();
      if (attachedInternals) {
        internals.value = attachedInternals;
      }

      if (shadowRoot) {
        shadowRoot.adoptedStyleSheets = [
          resetAdoptedStyleSheets,
          baseAdoptedStyleSheets,
        ];
      }
    }
  });

  return {
    host,
    shadowRoot,
    internals,
    props: parsedProps,
  };
};
