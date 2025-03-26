<script lang="tsx" setup>
import { useCe } from "@/composables/useCe";
import clsx from "clsx";
import { ref } from "vue";

export type Props = {
  vertical?: boolean;
  text?: string;
  textPosition?: "start" | "center" | "end";
};

export type Emits = never;

const definedProps = withDefaults(defineProps<Props>(), {
  textPosition: "start",
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
  <>
    <div
      ref={hostRef}
      class={clsx("n-divider", `-text-${props.value.textPosition}`, {
        "-vertical": props.value.vertical,
      })}
    >
      {props.value.text}
    </div>
  </>
));
</script>

<style lang="scss">
.n-divider {
  display: grid;
  gap: var(--n-2);
  align-items: center;
  justify-content: center;
  margin: var(--n-4) 0;

  &::before,
  &::after {
    display: block;
    height: 1px;
    content: "";
    background-color: var(--cs-border-secondary);
  }

  &.-text-start,
  &.-text-center,
  &.-text-end {
    grid-template-columns: 1fr 0;
  }

  &:not(:empty) {
    &.-text-start {
      grid-template-columns: 0 auto 1fr;
    }

    &.-text-center {
      grid-template-columns: 1fr auto 1fr;
    }

    &.-text-end {
      grid-template-columns: 1fr auto 0;
    }
  }

  &.-vertical {
    justify-items: center;
    height: 100%;
    margin: 0 var(--n-4);

    &::before,
    &::after {
      width: 1px;
      height: 100%;
    }

    &.-text-start,
    &.-text-center,
    &.-text-end {
      grid-template-rows: 1fr 0;
      grid-template-columns: auto;
    }

    &:not(:empty) {
      &.-text-start {
        grid-template-rows: 0 auto 1fr;
        grid-template-columns: auto;
      }

      &.-text-center {
        grid-template-rows: 1fr auto 1fr;
        grid-template-columns: auto;
      }

      &.-text-end {
        grid-template-rows: 1fr auto 0;
        grid-template-columns: auto;
      }
    }
  }
}
</style>
