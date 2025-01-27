import type { defineProps, Ref } from "vue";
import { baseAdoptedStyleSheets, resetAdoptedStyleSheets } from "@/utils/adoptedStyleSheets";
import { computed, onMounted, ref, useHost, useShadowRoot } from "vue";

export const useCe = <Props extends ReturnType<typeof defineProps>, Emit extends ReturnType<typeof defineEmit>>(mainRef: Ref<HTMLElement | null>, props: Props, emit: Emit) => {
  const parsedProps = computed(() => {
    const rest = Object.fromEntries(
      Object.entries(props).filter(([_key, value]) => {
        return value !== undefined && value !== false;
      }),
    );

    // console.log(rest);

    return rest as Props;
  });

  const customEventEmit = (name: Parameters<typeof emit>[0], detail: Parameters<typeof emit>[1]) => {
    return emit(name, { bubbles: true, composed: true }, detail);
  };

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
    customEventEmit,
  };
};
