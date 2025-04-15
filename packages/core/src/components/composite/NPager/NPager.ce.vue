<script lang="tsx" setup>
import type { EventEmitHelper } from "@/types/emit/EventEmit/EventEmits";
import type { ExtractEventName } from "@/types/emit/EventEmit/EventNames";
import type { AnchorHTMLAttributes } from "vue";
import { useCe } from "@/composables/useCe";
import MaterialSymbolsArrowLeftAltRounded from "~icons/material-symbols/arrow-left-alt-rounded?width=1.5rem&height=1.5rem";
import MaterialSymbolsArrowRightAltRounded from "~icons/material-symbols/arrow-right-alt-rounded?width=1.5rem&height=1.5rem";
import clsx from "clsx";

export type Props = {
  href: AnchorHTMLAttributes["href"];
  target?: "_self" | "_blank" | "_parent" | "_top" | "_unfencedTop";
  type: "prev" | "next";
  slot: "prev" | "next";
};

export type Emits = ExtractEventName<"click">;

const definedProps = withDefaults(defineProps<Props>(), {
  type: "prev",
});
const emit = defineEmits<EventEmitHelper<Emits>>();
const {
  host: _host,
  shadowRoot: _shadowRoot,
  internals: _internals,
  props,
  customEventEmit,
} = useCe(definedProps, emit);

defineRender(() => (
  <a
    href={props.value.href}
    target={props.value.target}
    class={clsx("n-pager", `-${props.value.type}`)}
    onClick={e => customEventEmit("onClick", e)}
  >
    <span class="icon">
      {props.value.type === "prev"
        ? <MaterialSymbolsArrowLeftAltRounded />
        : <MaterialSymbolsArrowRightAltRounded />}
    </span>
    <span class="type">
      {props.value.type === "prev"
        ? "Previous"
        : "Next"}
    </span>
    <span class="text">
      <slot>
        {props.value.type === "prev"
          ? "Go to Previous page"
          : "Go to Next page"}
      </slot>
    </span>
  </a>
));
</script>

<style lang="scss">
.n-pager {
  display: grid;
  gap: var(--n-2);
  padding: var(--n-4);
  cursor: pointer;
  border-radius: var(--n-2);
  outline: solid 1px var(--cs-border-tertiary);

  > .icon {
    display: flex;
    grid-row: 1/3;
    align-items: center;
    justify-content: center;
  }

  > .type {
    grid-row: 1/2;
    font-size: var(--n-3);
    color: var(--cs-text-secondary);
    user-select: none;
  }

  > .text {
    grid-row: 2/3;
    font-size: var(--n-4);
    color: var(--cs-app-400);
  }

  &.-prev {
    grid-template-rows: auto 1fr;
    grid-template-columns: auto 1fr;

    > .icon {
      grid-column: 1/2;
      padding-right: var(--n-2);
    }

    > .type,
    > .text {
      grid-column: 2/3;
    }
  }

  &.-next {
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr auto;

    > .icon {
      grid-column: 2/3;
      padding-left: var(--n-2);
    }

    > .type,
    > .text {
      grid-column: 1/2;
      justify-self: end;
    }
  }

  &:hover {
    outline-color: var(--cs-border-secondary);

    > .text {
      color: var(--cs-app-500);
      text-decoration: underline dotted;
      text-decoration-thickness: 2px;
      text-decoration-color: var(--cs-app-500);
      text-underline-offset: 4px;
    }
  }
}
</style>
