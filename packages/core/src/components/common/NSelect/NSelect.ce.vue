<script lang="tsx" setup>
import type { EventEmitHelper } from "@/types/emit/EventEmit/EventEmits";
import type { ExtractEventName } from "@/types/emit/EventEmit/EventNames";
import type { SelectHTMLAttributes } from "vue";
import { useCe } from "@/composables/useCe";
import MaterialSymbolsArrowDropDownRounded from "~icons/material-symbols/arrow-drop-down-rounded?width=1.5rem&height=1.5rem";
import { onMounted, ref, watch } from "vue";

export type Props = {
  name: SelectHTMLAttributes["name"];
  disabled?: boolean;
  placeholder?: SelectHTMLAttributes["placeholder"];
};

export type Emits = ExtractEventName<"change">;

const definedProps = withDefaults(defineProps<Props>(), {
  disabled: false,
});
const emit = defineEmits<EventEmitHelper<Emits>>();
const hostRef = ref<HTMLInputElement | null>(null);
const {
  host,
  internals,
  props,
  customEventEmit,
  getSlottedElements,
} = useCe(hostRef, definedProps, emit);

const isShowOptions = ref(false);
const slottedElements = ref<Element[] | null>(null);

function preventSpaceScroll(event: KeyboardEvent) {
  if (event.key === " ") {
    event.preventDefault();
  }
}

// スペースキーによるスクロールの無効化を解除する関数
function allowSpaceScroll() {
  window.removeEventListener("keydown", preventSpaceScroll);
}

const handleCLick = (e: Event) => {
  e.preventDefault();

  if (props.value.disabled) {
    return;
  }

  isShowOptions.value = true;
};

const handleKeydown = (e: KeyboardEvent) => {
  e.preventDefault();

  if (props.value.disabled) {
    return;
  }

  if (isShowOptions.value && e.key === "Escape") {
    isShowOptions.value = false;
    return;
  }

  if (!isShowOptions.value && ["ArrowDown", "ArrowUp", " ", "Enter"].includes(e.key)) {
    isShowOptions.value = true;
  }

  if (isShowOptions.value && ["ArrowDown", "ArrowUp"].includes(e.key)) {
    window.addEventListener("keydown", preventSpaceScroll);

    const slottedElementsIndex = slottedElements.value?.findIndex(node => node === document.activeElement) ?? 0;

    if (slottedElements.value && e.key === "ArrowDown") {
      const nextIndex = (slottedElementsIndex + 1) % slottedElements.value.length;
      const nextOption = slottedElements.value[nextIndex].shadowRoot?.querySelector("[part=\"n-option\"]") as HTMLElement;
      nextOption?.focus();
    }
    else if (slottedElements.value && e.key === "ArrowUp") {
      const prevIndex = (slottedElementsIndex - 1 + slottedElements.value.length) % slottedElements.value.length;
      const prevOption = slottedElements.value[prevIndex].shadowRoot?.querySelector("[part=\"n-option\"]") as HTMLElement;
      prevOption?.focus();
    }
  }
};

const handleSelectOption = (node: Node) => {
  const clonedNode = node.cloneNode(true) as HTMLElement;
  const clonedNodeValue = clonedNode.getAttribute("value");

  if (host) {
    const existingSelectedValue = getSlottedElements({ slotName: "selected-value" })?.[0];
    if (existingSelectedValue)
      host.removeChild(existingSelectedValue);

    clonedNode.slot = "selected-value";
    clonedNode.tabIndex = -1;
    clonedNode.removeAttribute("selected");
    host.appendChild(clonedNode);
    hostRef.value?.focus();
  }

  if (internals.value)
    internals.value.setFormValue(clonedNodeValue);

  customEventEmit("onChange", { detail: { value: clonedNodeValue } });
  isShowOptions.value = false;
  allowSpaceScroll();
};

const handleBlur = (event: FocusEvent) => {
  if (props.value.disabled) {
    return;
  }

  const relatedTarget = event.relatedTarget as Element;
  const slotElement = getSlottedElements();
  const selectedValueElement = getSlottedElements({ slotName: "selected-value" });

  if (relatedTarget && (slotElement?.includes(relatedTarget) || selectedValueElement?.includes(relatedTarget))) {
    return;
  }

  isShowOptions.value = false;
};

onMounted(() => {
  const selectedSlottedElement = getSlottedElements({
    customSelector: "n-option[selected]:not([disabled]):not([slot])",
  });

  if (!selectedSlottedElement?.length) {
    return;
  }

  handleSelectOption(selectedSlottedElement[0]);
});

watch(() => host, () => {
  slottedElements.value = getSlottedElements({
    customSelector: "n-option:not([disabled]):not([slot])",
  });

  slottedElements.value?.forEach((node) => {
    node.removeEventListener("click", (event) => {
      event.stopPropagation();
      handleSelectOption(node);
    });
    node.addEventListener("click", (event) => {
      event.stopPropagation();
      handleSelectOption(node);
    });

    node.removeEventListener("keydown", (event) => {
      if (["Enter", " "].includes((event as KeyboardEvent).key)) {
        event.stopPropagation();
        handleSelectOption(node);
      }
    });
    node.addEventListener("keydown", (event) => {
      if (["Enter", " "].includes((event as KeyboardEvent).key)) {
        event.stopPropagation();
        handleSelectOption(node);
      }
    });
  });
}, {
  deep: true,
  immediate: true,
});

defineRender(() => (
  <div
    ref={hostRef}
    class="n-select"
    role="select"
    tabindex={0}
    aria-disabled={props.value.disabled}
    onBlur={handleBlur}
    onClick={handleCLick}
    onKeydown={handleKeydown}
  >
    <div class="selected">
      <slot name="selected-value">
        <span class="placeholder">{props.value.placeholder}</span>
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
));
</script>

<style lang="scss">
.n-select {
  position: relative;
  box-sizing: border-box;
  padding: var(--n-3) var(--n-5);
  font-size: var(--n-4);
  color: var(--cs-text-primary);
  cursor: pointer;
  caret-color: transparent;
  background: transparent;
  border: none;
  border-radius: var(--n-2);
  outline: 1px solid var(--cs-neutral-400);
  outline-offset: -1.5px;

  > .selected {
    display: flex;
    gap: var(--n-2);
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    > slot > .placeholder {
      color: var(--cs-neutral-300);
      user-select: none;
    }

    > svg {
      color: var(--cs-text-secondary);
    }

    ::slotted(n-option) {
      margin: calc(-1 * var(--n-2)) calc(-1 * var(--n-4));
    }
  }

  &[aria-disabled] {
    color: var(--cs-text-secondary);
    cursor: not-allowed;
  }

  &::after {
    position: absolute;
    inset: 0;
    content: "";
    border-radius: var(--n-2);
    outline: 1px solid var(--cs-neutral-500);
    outline-offset: 0;
    opacity: 0;
    transition: all 0.1s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:not([aria-disabled]):focus,
  &:not([aria-disabled]):hover {
    &::after {
      outline-offset: 2px;
      opacity: 1;
    }
  }
}

.n-select-options {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  display: grid;
  grid-template-rows: 0fr;
  width: 100%;
  margin: var(--n-2) 0;
  pointer-events: none;
  cursor: default;
  background-color: color-mix(in srgb, var(--cs-background-primary) 98%, transparent);
  backdrop-filter: blur(4px);
  border-radius: var(--n-2);
  box-shadow: 0 var(--n-1) var(--n-4) color-mix(in srgb, var(--cs-neutral-400) 25%, transparent);
  opacity: 0;
  transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);

  &[data-hidden="false"] {
    grid-template-rows: 1fr;
    outline: 1px solid var(--cs-neutral-300);
    opacity: 1;
    transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
  }

  > .summary {
    overflow: hidden;

    > .slot {
      display: grid;
      gap: var(--n-2);
      padding: var(--n-2);
      pointer-events: auto;
    }
  }
}
</style>
