import type { CC } from "chatora";
import { toBoolean, toString } from "@chatora/util";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NSelect.scss?raw";

const MaterialSymbolsArrowDropDownRounded = () => () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24">
      <path fill="currentColor" d="M11.475 14.475L7.85 10.85q-.075-.075-.112-.162T7.7 10.5q0-.2.138-.35T8.2 10h7.6q.225 0 .363.15t.137.35q0 .05-.15.35l-3.625 3.625q-.125.125-.25.175T12 14.7t-.275-.05t-.25-.175" />
    </svg>
  );
};

export type Props = {
  name?: string;
  disabled?: boolean;
  placeholder?: string;
};

export type Emits = {
  onChange: { value: string | null };
};

export const NSelect: CC<Props, Emits> = ({
  defineProps,
  defineEmits,
  getHost,
  getInternals,
  reactivity: { signal, effect },
}) => {
  const props = defineProps({
    name: v => toString(v),
    disabled: v => toBoolean(v) ?? false,
    placeholder: v => toString(v),
  });

  const emits = defineEmits({
    onChange: (_: { value: string | null }) => {},
  });

  const host = getHost();
  const internals = getInternals();

  const clickHandlerMap = new WeakMap<Element, (event: Event) => void>();
  const keydownHandlerMap = new WeakMap<Element, (event: KeyboardEvent) => void>();

  const [isShowOptions, setIsShowOptions] = signal(false);
  const [slottedElements, setSlottedElements] = signal<Element[] | null>(null);

  function preventSpaceScroll(event: KeyboardEvent) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }

  function allowSpaceScroll() {
    window.removeEventListener("keydown", preventSpaceScroll);
  }

  function getSlottedElements(slotName?: string, customSelector?: string): Element[] | null {
    if (!host) {
      return null;
    }

    const selector = customSelector || (slotName ? `[slot='${slotName}']` : "n-option:not([disabled]):not([slot])");

    return Array.from(host.querySelectorAll(selector));
  }

  const handleClick = (e: Event) => {
    e.preventDefault();

    if (props().disabled) {
      return;
    }

    setIsShowOptions(true);
  };

  const handleKeydown = (e: KeyboardEvent) => {
    e.preventDefault();
    if (props().disabled) {
      return;
    }

    if (isShowOptions()) {
      if (e.key === "Escape") {
        setIsShowOptions(false);
        return;
      }
    }

    if (!isShowOptions() && ["ArrowDown", "ArrowUp", " ", "Enter"].includes(e.key)) {
      setIsShowOptions(true);
    }

    if (isShowOptions() && ["ArrowDown", "ArrowUp"].includes(e.key)) {
      window.addEventListener("keydown", preventSpaceScroll);

      const elements = slottedElements();
      const idx = elements?.findIndex((node: Element) => node === document.activeElement) ?? 0;

      if (elements && e.key === "ArrowDown") {
        const nextIndex = (idx + 1) % elements.length;
        const nextOption = (elements[nextIndex] as HTMLElement).shadowRoot?.querySelector("[part='n-option']") as HTMLElement;
        nextOption?.focus();
      }
      else if (elements && e.key === "ArrowUp") {
        const prevIndex = (idx - 1 + elements.length) % elements.length;
        const prevOption = (elements[prevIndex] as HTMLElement).shadowRoot?.querySelector("[part='n-option']") as HTMLElement;
        prevOption?.focus();
      }
    }
  };

  const handleSelectOption = (node: Element) => {
    const slotElement = getSlottedElements();
    slotElement?.forEach((el: Element) => {
      if (el instanceof HTMLElement) {
        el.removeAttribute("selected");
      }
    });
    node.setAttribute("selected", "");

    const clonedNode = node.cloneNode(true) as HTMLElement;
    const clonedNodeValue = clonedNode.getAttribute("value");

    if (host) {
      const existingSelectedValue = getSlottedElements("selected-value")?.[0];

      if (existingSelectedValue) {
        host.removeChild(existingSelectedValue);
      }

      clonedNode.setAttribute("slot", "selected-value");
      clonedNode.tabIndex = -1;
      clonedNode.removeAttribute("selected");

      host.appendChild(clonedNode);
      host.focus();
    }

    if (internals) {
      internals.setFormValue(clonedNodeValue);
    }

    emits("onChange", { value: clonedNodeValue });

    setIsShowOptions(false);
    allowSpaceScroll();
  };

  const handleBlur = (event: FocusEvent) => {
    if (props().disabled)
      return;
    const relatedTarget = event.relatedTarget as Element;
    const slotElement = getSlottedElements();
    const selectedValueElement = getSlottedElements("selected-value");
    if (relatedTarget && (slotElement?.includes(relatedTarget) || selectedValueElement?.includes(relatedTarget))) {
      return;
    }
    setIsShowOptions(false);
  };

  effect(() => {
    if (!host)
      return;
    const selectedSlottedElement = getSlottedElements(undefined, "n-option[selected]:not([disabled]):not([slot])");
    if (!selectedSlottedElement?.length)
      return;
    handleSelectOption(selectedSlottedElement[0]);
  });

  effect(() => {
    if (!host)
      return;
    setSlottedElements(getSlottedElements());
    const elements = slottedElements();
    elements?.forEach((node: Element) => {
      const prevClick = clickHandlerMap.get(node);
      if (prevClick)
        node.removeEventListener("click", prevClick);
      const prevKeydown = keydownHandlerMap.get(node);
      if (prevKeydown)
        node.removeEventListener("keydown", prevKeydown as any);
      const clickHandler = (event: Event) => {
        event.stopPropagation();
        handleSelectOption(node);
      };
      const keydownHandler = (event: Event) => {
        if (event instanceof KeyboardEvent && ["Enter", " "].includes(event.key)) {
          event.stopPropagation();
          handleSelectOption(node);
        }
      };
      node.addEventListener("click", clickHandler);
      node.addEventListener("keydown", keydownHandler as any);
      clickHandlerMap.set(node, clickHandler);
      keydownHandlerMap.set(node, keydownHandler as any);
    });
  });

  return () => (
    <Host style={[style, resetStyle]}>
      <div
        class="n-select"
        role="select"
        tabindex={0}
        onBlur={handleBlur}
        onClick={handleClick}
        onKeyDown={handleKeydown}
      >
        <div class="selected">
          <slot name="selected-value">
            <span class="placeholder">{props().placeholder}</span>
          </slot>
          <MaterialSymbolsArrowDropDownRounded />
        </div>
        <div class="n-select-options" data-hidden={!isShowOptions()}>
          <div class="summary">
            <div class="slot">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </Host>
  );
};
