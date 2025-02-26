import type { defineProps, Ref } from "vue";
// import base from "@/styles/base.css?inline";
// import reset from "@/styles/reset.css?inline";
import { computed, onMounted, ref, useHost, useShadowRoot } from "vue";

export const useCe = <Props extends ReturnType<typeof defineProps>, Emit extends ReturnType<typeof defineEmit>>(mainRef: Ref<HTMLElement | null>, props: Props, emit: Emit) => {
  const parsedProps = computed(() => {
    const rest = Object.fromEntries(
      Object.entries(props).filter(([_key, value]) => {
        return value !== undefined && value !== false;
      }),
    );

    return rest as Props;
  });

  const customEventEmit = (name: Parameters<typeof emit>[0], detail: Parameters<typeof emit>[1]) => {
    return emit(name, { bubbles: true, composed: true }, detail);
  };

  console.warn = () => {};

  const host = useHost();
  const shadowRoot = useShadowRoot();
  const internals = ref<ElementInternals | null>(null);

  onMounted(() => {
    if (mainRef.value) {
      const attachedInternals = host?.attachInternals();
      if (attachedInternals) {
        internals.value = attachedInternals;
      }

      // if (shadowRoot) {
      //   const baseAdoptedStyleSheets = new CSSStyleSheet();
      //   baseAdoptedStyleSheets.replaceSync(base);

      //   const resetAdoptedStyleSheets = new CSSStyleSheet();
      //   resetAdoptedStyleSheets.replaceSync(reset);

      //   shadowRoot.adoptedStyleSheets = [
      //     resetAdoptedStyleSheets,
      //     baseAdoptedStyleSheets,
      //   ];
      // }
    }
  });

  // eslint-disable-next-line no-self-assign
  console.warn = console.warn;

  return {
    host,
    shadowRoot,
    internals,
    props: parsedProps,
    customEventEmit,
  };
};
