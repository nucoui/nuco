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

    // console.log(rest);

    return rest as Props;
  });

  // const ceSymbol = Symbol("") as InjectionKey<typeof parsedProps>;
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

  // provide(ceSymbol, parsedProps);

  return {
    // ceSymbol,
    host,
    shadowRoot,
    internals,
    props: parsedProps,
  };
};
