import type { Ref } from "vue";
import { onMounted, ref, useHost, useShadowRoot } from "vue";
import base from "../styles/base.css?inline";
import reset from "../styles/reset.css?inline";

export const useCe = (mainRef: Ref<HTMLElement | null>) => {
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
        const baseAdoptedStyleSheets = new CSSStyleSheet();
        baseAdoptedStyleSheets.replaceSync(base);

        const resetAdoptedStyleSheets = new CSSStyleSheet();
        resetAdoptedStyleSheets.replaceSync(reset);

        shadowRoot.adoptedStyleSheets = [
          resetAdoptedStyleSheets,
          baseAdoptedStyleSheets,
        ];
      }
    }
  });

  return { host, shadowRoot, internals };
};
