<script lang="tsx" setup>
import type { EventEmitHelper } from "@/types/emit/EventEmit/EventEmits";
import type { ExtractEventName } from "@/types/emit/EventEmit/EventNames";
import type { SelectHTMLAttributes } from "vue";
import { useCe } from "@/composables/useCe";
import MaterialSymbolsArrowDropDownRounded from "~icons/material-symbols/arrow-drop-down-rounded?width=1.5rem&height=1.5rem";
import clsx from "clsx";
import { onMounted, ref } from "vue";

export type Props = {
  name: SelectHTMLAttributes["name"];
  placeholder?: SelectHTMLAttributes["placeholder"];
};

export type Emits = ExtractEventName<"change">;

const definedProps = withDefaults(defineProps<Props>(), {});
const emit = defineEmits<EventEmitHelper<Emits>>();
const hostRef = ref<HTMLInputElement | null>(null);
const {
  host,
  shadowRoot,
  internals,
  props,
  customEventEmit,
  getSlot,
} = useCe(hostRef, definedProps, emit);

const isShowOptions = ref(false);

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
  isShowOptions.value = true;
};

const handleKeydown = (e: KeyboardEvent) => {
  if (isShowOptions.value && e.key === "Escape") {
    e.preventDefault();
    isShowOptions.value = false;
    return;
  }

  if (!isShowOptions.value && ["ArrowDown", "ArrowUp", " ", "Enter"].includes(e.key)) {
    e.preventDefault();
    isShowOptions.value = true;
  }

  if (isShowOptions.value && ["ArrowDown", "ArrowUp"].includes(e.key)) {
    e.preventDefault();
    window.addEventListener("keydown", preventSpaceScroll);

    const slotElement = getSlot();
    const assignedNodes = slotElement?.assignedNodes().filter(node => node.nodeType === Node.ELEMENT_NODE) as HTMLElement[];
    const currentIndex = assignedNodes.findIndex(node => node === document.activeElement);

    if (e.key === "ArrowDown") {
      const nextIndex = (currentIndex + 1) % assignedNodes.length;
      const nextOption = assignedNodes[nextIndex].shadowRoot?.querySelector("[part=\"n-option\"]") as HTMLElement;
      nextOption?.focus();
    }
    else if (e.key === "ArrowUp") {
      const prevIndex = (currentIndex - 1 + assignedNodes.length) % assignedNodes.length;
      const prevOption = assignedNodes[prevIndex].shadowRoot?.querySelector("[part=\"n-option\"]") as HTMLElement;
      prevOption?.focus();
    }
  }

  if (isShowOptions.value && (e.key === "Tab" || (e.shiftKey && e.key === "Tab"))) {
    e.preventDefault();
  }
};

const handleSelectOption = (node: Node) => {
  const clonedNode = node.cloneNode(true) as HTMLElement;
  const clonedNodeValue = clonedNode.getAttribute("value");

  if (host) {
    const existingSelectedValue = host.querySelector("[slot=\"selected-value\"]");
    if (existingSelectedValue)
      host.removeChild(existingSelectedValue);

    clonedNode.slot = "selected-value";
    clonedNode.tabIndex = -1;
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
  const relatedTarget = event.relatedTarget as Element;
  const slotElement = getSlot();
  const selectedValueElement = getSlot("selected-value");

  if (relatedTarget && (
    slotElement?.assignedElements().includes(relatedTarget)
    || selectedValueElement?.assignedElements().includes(relatedTarget)
  )) {
    return;
  }

  isShowOptions.value = false;
};

onMounted(() => {
  const slotElement = shadowRoot?.querySelector("slot:not([name])") as HTMLSlotElement | null;
  slotElement?.assignedNodes().forEach((node) => {
    if (node.nodeName === "N-OPTION") {
      node.addEventListener("click", (event) => {
        event.stopPropagation();
        handleSelectOption(node);
      });
      node.addEventListener("keydown", (event) => {
        if (["Enter", " "].includes((event as KeyboardEvent).key)) {
          event.stopPropagation();
          handleSelectOption(node);
        }
      });
    }
  });
});

defineRender(() => (
  <div
    ref={hostRef}
    class="n-select"
    role="select"
    tabindex={0}
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
    <div class={clsx("n-select-options", { "-show": isShowOptions.value })}>
      <slot />
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
      margin: calc(-1 * var(--n-2)) calc(-1 * var(--n-5));
    }
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

  &:not([disabled]):focus,
  &:not([disabled]):hover {
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
  display: none;
  width: 100%;
  padding: var(--n-2);
  margin: var(--n-2) 0;
  overflow: hidden;
  pointer-events: none;
  cursor: default;
  background-color: color-mix(in srgb, var(--cs-background-primary) 98%, transparent);
  backdrop-filter: blur(4px);
  border-radius: var(--n-2);
  outline: 1px solid var(--cs-neutral-300);
  box-shadow: 0 var(--n-1) var(--n-4) color-mix(in srgb, var(--cs-neutral-400) 25%, transparent);
  opacity: 0;
  transition: all 0.1s cubic-bezier(0.22, 1, 0.36, 1);

  &.-show {
    display: grid;
    gap: var(--n-2);
    pointer-events: auto;
    opacity: 1;
  }
}
</style>
