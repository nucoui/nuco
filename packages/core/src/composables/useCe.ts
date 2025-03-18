import type { defineProps, Ref } from "vue";
import base from "@/styles/base.css?inline";
import reset from "@/styles/reset.css?inline";
import { computed, onMounted, ref, useHost, useShadowRoot } from "vue";

export const useCe = <Props extends ReturnType<typeof defineProps>, Emit extends ReturnType<typeof defineEmit>>(mainRef: Ref<HTMLElement | null>, props: Props, emit: Emit) => {
  const parsedProps = computed(() => {
    const rest = Object.fromEntries(
      Object.entries(props).filter(([_key, value]) => {
        return value !== undefined && value !== false;
      }).map(([key, value]) => {
        const parsedValue = (() => {
          if (typeof value === "boolean") {
            return Boolean(value);
          }
          return value;
        })();
        return [key, parsedValue];
      }),
    );

    return rest as Props;
  });

  console.warn = () => {};

  const host = useHost();
  const shadowRoot = useShadowRoot();
  const internals = ref<ElementInternals | null>(null);

  if (shadowRoot) {
    const baseAdoptedStyleSheets = new CSSStyleSheet();
    baseAdoptedStyleSheets.replaceSync(base);
    shadowRoot.adoptedStyleSheets.push(baseAdoptedStyleSheets);

    const resetAdoptedStyleSheets = new CSSStyleSheet();
    resetAdoptedStyleSheets.replaceSync(reset);
    shadowRoot.adoptedStyleSheets.push(resetAdoptedStyleSheets);
  }

  onMounted(() => {
    if (mainRef.value) {
      const attachedInternals = host?.attachInternals();
      if (attachedInternals) {
        internals.value = attachedInternals;
      }
    }
  });

  // eslint-disable-next-line no-self-assign
  console.warn = console.warn;

  const customEventEmit = (name: Parameters<typeof emit>[0], detail: Parameters<typeof emit>[1]) => {
    return emit(name, { bubbles: true, composed: true }, detail);
  };

  const getSlot = (name?: string) => {
    const selector = name ? `slot[name="${name}"]` : "slot:not([name])";
    if (!shadowRoot) {
      return null;
    }

    return shadowRoot?.querySelector(selector) as HTMLSlotElement | null;
  };

  const getSlottedElements = <T extends Element>(selector?: {
    slotName?: string;
    customSelector?: never;
  } | {
    slotName?: never;
    customSelector?: string;
  }) => {
    const parseSelector = (() => {
      if (selector) {
        if (selector.slotName) {
          return `*[slot="${selector.slotName}"]`;
        }

        if (selector.customSelector) {
          return selector.customSelector;
        }
      }

      return "*:not([slot])";
    })();

    if (!host) {
      return null;
    }

    const nodes = host.querySelectorAll<T>(parseSelector) ?? [];

    return Array.from(nodes);
  };

  return {
    host,
    shadowRoot,
    internals,
    props: parsedProps,
    customEventEmit,
    getSlot,
    getSlottedElements,
  };
};
