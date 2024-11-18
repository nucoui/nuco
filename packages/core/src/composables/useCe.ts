import type { Ref } from "vue";
import { onMounted, ref, useHost, useShadowRoot } from "vue";
import { baseAdoptedStyleSheets, resetAdoptedStyleSheets } from "../utils/adoptedStyleSheets";

export const useCe = (mainRef: Ref<HTMLElement | null>) => {
  const host = useHost();
  const shadowRoot = useShadowRoot();
  const internals = ref<ElementInternals | null>(null);

  const propsInjectionKey = Symbol("propsInjectionKey");

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
    propsInjectionKey,
  };
};
