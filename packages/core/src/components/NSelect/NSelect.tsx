import type { CC } from "chatora";

import { effect, getHost, getInternals, getSlotteds, onConnected, signal } from "chatora";
import { Host } from "chatora/jsx-runtime";

import { toBoolean, toString } from "chatora/util";
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
  "on-change"?: { value: string | null };
};

export const NSelect: CC<Props, Emits> = ({
  defineProps,
  defineEmits,
}) => {
  const props = defineProps({
    name: v => toString(v),
    disabled: v => toBoolean(v) ?? false,
    placeholder: v => toString(v),
  });

  const emits = defineEmits({
    "on-change": () => {},
  });

  const host = getHost();
  const internals = getInternals();
  const slotted = getSlotteds();
  const selectedValueSlotted = getSlotteds("selected-value");

  const isShowOptions = signal(false);
  const isBlurred = signal(false);
  const focusedOptionIndex = signal(-1);

  /**
   * Get all N-OPTION elements from slotted content
   */
  const getOptions = () => slotted.value?.filter(el => el.tagName === "N-OPTION") || [];

  /**
   * Clear all selected states from options
   */
  const clearSelectedStates = () => {
    slotted.value?.forEach((element) => {
      if (element.tagName === "N-OPTION") {
        element.removeAttribute("selected");
      }
    });
  };

  /**
   * Remove currently selected value from DOM
   */
  const removeSelectedValue = () => {
    selectedValueSlotted.value?.forEach((selectedEl) => {
      if (selectedEl.tagName === "N-OPTION") {
        selectedEl.removeAttribute("selected");
        selectedEl.removeAttribute("slot");
        // Use remove() method for safer removal
        selectedEl.remove();
      }
    });
  };

  /**
   * Set new selected value in DOM and form
   */
  const setSelectedValue = (element: HTMLElement, value: string | null) => {
    element.setAttribute("selected", "");

    const selectedNode = element.cloneNode(true) as HTMLElement;
    selectedNode.setAttribute("slot", "selected-value");
    selectedNode.removeAttribute("selected");
    selectedNode.tabIndex = -1;

    // Remove existing selected value nodes with proper parent check
    const currentSelected = host.value!.querySelectorAll("n-option[slot=\"selected-value\"]");

    if (currentSelected) {
      currentSelected.forEach((el) => {
        // Use remove() method for safer removal
        el.remove();
      });
    }

    host.value?.appendChild(selectedNode);

    if (internals.value) {
      internals.value.setFormValue(value);
    }
  };

  /**
   * Handle option selection
   */
  const handleSelectOption = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    if (props().disabled) {
      return;
    }

    const el = e.currentTarget as HTMLElement;
    const value = el.getAttribute("value");

    clearSelectedStates();
    removeSelectedValue();
    setSelectedValue(el, value);

    emits("on-change", { value: value ?? null });
    isShowOptions.set(false);
    focusedOptionIndex.set(-1);
  };

  const handleBlur = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    if (props().disabled) {
      return;
    }

    isBlurred.set(true);
  };

  const handleClick = (e: Event) => {
    e.preventDefault();

    if (props().disabled) {
      return;
    }

    isShowOptions.set(true);
  };

  /**
   * Focus on specific option by index
   */
  const focusOption = (index: number) => {
    const options = getOptions();
    if (options.length === 0)
      return;

    setTimeout(() => {
      const targetOption = options[index] as HTMLElement;
      const focusableElement = targetOption.shadowRoot?.querySelector("[role=\"option\"]") as HTMLElement || targetOption;
      focusableElement.focus();

      // Add keydown listener only once per focus
      const handleOptionKeydown = (ke: KeyboardEvent) => {
        if (ke.key === "Enter" || ke.key === " ") {
          targetOption.click();
        }
      };

      focusableElement.removeEventListener("keydown", handleOptionKeydown);
      focusableElement.addEventListener("keydown", handleOptionKeydown, { once: true });
    }, 0);
  };

  const handleKeydown = (e: KeyboardEvent) => {
    e.preventDefault();

    if (props().disabled) {
      return;
    }

    if (e.key === "Escape") {
      isShowOptions.set(false);
      focusedOptionIndex.set(-1);
    }
    else if (e.key === "ArrowDown") {
      const options = getOptions();
      if (options.length > 0) {
        if (!isShowOptions.value) {
          isShowOptions.set(true);
          focusedOptionIndex.set(0);
        }
        else {
          const nextIndex = focusedOptionIndex.value < options.length - 1 ? focusedOptionIndex.value + 1 : 0;
          focusedOptionIndex.set(nextIndex);
        }
        focusOption(focusedOptionIndex.value);
      }
    }
    else if (e.key === "ArrowUp") {
      const options = getOptions();
      if (options.length > 0) {
        if (!isShowOptions.value) {
          isShowOptions.set(true);
          focusedOptionIndex.set(options.length - 1);
        }
        else {
          const prevIndex = focusedOptionIndex.value > 0 ? focusedOptionIndex.value - 1 : options.length - 1;
          focusedOptionIndex.set(prevIndex);
        }
        focusOption(focusedOptionIndex.value);
      }
    }
  };

  /**
   * Set tabindex for all options based on visibility
   */
  const updateOptionTabIndex = (tabIndex: number) => {
    slotted.value?.forEach((el) => {
      if (el.tagName === "N-OPTION") {
        if (tabIndex === -1) {
          el.setAttribute("tabindex", "-1");
        }
        else {
          el.removeAttribute("tabindex");
        }

        // Shadow DOM内の要素のtabindexも設定
        const innerElement = el.shadowRoot?.querySelector("[role=\"option\"]") as HTMLElement;
        if (innerElement) {
          innerElement.tabIndex = tabIndex;
        }
      }
    });
  };

  effect(() => {
    slotted.value?.forEach((el) => {
      if (el.tagName === "N-OPTION") {
        if (el.hasAttribute("disabled")) {
          return;
        }

        el.addEventListener("click", handleSelectOption);
      }
    });
  });

  effect(() => {
    updateOptionTabIndex(isShowOptions.value ? 0 : -1);
  });

  onConnected(() => {
    if (!host.value) {
      return;
    }

    const selectedSlottedElement = host.value?.querySelector("n-option[selected]:not([disabled]):not([slot])");

    if (!selectedSlottedElement) {
      return;
    }

    setSelectedValue(selectedSlottedElement as HTMLElement, selectedSlottedElement?.getAttribute("value"));
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
        <div class="n-select-options" data-hidden={!isShowOptions.value}>
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
