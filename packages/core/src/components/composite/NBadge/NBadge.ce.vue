<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import clsx from "clsx";
import { ref } from "vue";

export type Props = {
  type?: "primary" | "secondary" | "tertiary" | "success" | "warning" | "error";
  text: string;
};

export type Emits = never;

const definedProps = withDefaults(defineProps<Props>(), {
  type: "primary",
});
// const emit = defineEmits<EventEmitHelper<Emits>>();
const hostRef = ref<HTMLInputElement | null>(null);
const {
  host: _host,
  shadowRoot: _shadowRoot,
  internals: _internals,
  props,
} = useCe(hostRef, definedProps, () => {});

defineRender(() => (
  <span
    ref={hostRef}
    class={clsx(
      "n-badge",
      `-${props.value.type}`,
    )}
  >
    {props.value.text}
  </span>
));
</script>

<style lang="scss">
/* :host {
  display: inline-block;
  width: fit-content;
  height: fit-content;
} */

.n-badge {
  display: inline-block;
  width: fit-content;
  padding: 2px var(--n-3);
  margin: 2px 0 0 var(--n-2);
  font-size: var(--n-3);
  font-weight: 500;
  line-height: 1.5;
  vertical-align: top;
  border: 1px solid transparent;
  border-radius: calc(infinity * 1px);

  &.-primary {
    color: var(--cs-app-800);
    background-color: var(--cs-app-400);
    border-color: var(--cs-app-500);
  }

  &.-secondary {
    color: var(--cs-app-700);
    background-color: var(--cs-app-300);
    border-color: var(--cs-app-400);
  }

  &.-tertiary {
    color: var(--cs-app-700);
    background-color: var(--cs-app-200);
    border-color: var(--cs-app-300);
  }

  &.-success {
    color: var(--p-blue-200);
    background-color: var(--p-blue-600);
    border-color: var(--p-blue-500);
  }

  &.-warning {
    color: var(--p-yellow-900);
    background-color: var(--p-yellow-600);
    border-color: var(--p-yellow-300);
  }

  &.-error {
    color: var(--p-red-200);
    background-color: var(--p-red-600);
    border-color: var(--p-red-500);
  }
}
</style>
