<script lang="tsx" setup>
import type { EventEmitHelper } from "@/types/emit/EventEmit/EventEmits";
import type { ExtractEventName } from "@/types/emit/EventEmit/EventNames";
import type { AnchorHTMLAttributes } from "vue";
import { useCe } from "@/composables/useCe";
import MaterialSymbolsOpenInNewRounded from "~icons/material-symbols/open-in-new-rounded?width=1rem&height=1rem";
import clsx from "clsx";
import { ref } from "vue";

export type Props = {
  href: AnchorHTMLAttributes["href"];
  target?: "_self" | "_blank" | "_parent" | "_top" | "_unfencedTop";
  underline?: "none" | "solid" | "dashed" | "dotted";
};

export type Emits = ExtractEventName<"click">;

const definedProps = withDefaults(defineProps<Props>(), {
  target: "_self",
  underline: "dotted",
});
const emit = defineEmits<EventEmitHelper<Emits>>();
const hostRef = ref<HTMLInputElement | null>(null);
const {
  host: _host,
  shadowRoot: _shadowRoot,
  internals: _internals,
  props,
  customEventEmit,
} = useCe(hostRef, definedProps, emit);

const handleClick = (e: MouseEvent) => {
  customEventEmit("onClick", e);
};

defineRender(() => (
  <a
    ref={hostRef}
    href={props.value.href}
    target={props.value.target}
    class={clsx("n-anchor", `-${props.value.underline}`)}
    onClick={handleClick}
  >
    <slot />
    {props.value.target === "_blank" && <MaterialSymbolsOpenInNewRounded class="blank" />}
  </a>
));
</script>

<style lang="scss">
.n-anchor {
  display: inline-flex;
  gap: var(--n-1);
  align-items: last baseline;
  text-decoration-thickness: 2px;
  text-decoration-color: var(--cs-border-secondary);
  text-underline-offset: 4px;
  cursor: pointer;
  transition: 0.1s;

  &.-none {
    text-decoration: none;
  }

  &.-solid {
    text-decoration: underline;
  }

  &.-dashed {
    text-decoration: underline dashed;
  }

  &.-dotted {
    text-decoration: underline dotted;
  }

  &:hover {
    color: var(--p-app-500);
    text-decoration: underline solid;
  }

  > .blank {
    position: relative;
    bottom: -2px;
  }
}
</style>
