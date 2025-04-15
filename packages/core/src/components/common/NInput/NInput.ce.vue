<script lang="tsx" setup>
import type { EventEmitHelper } from "../../../types/emit/EventEmit/EventEmits";
import type { ClipboardEventNames, InputEventNames } from "../../../types/emit/EventEmit/EventNames";
import clsx from "clsx";
import { computed, type InputHTMLAttributes, ref } from "vue";
import { useCe } from "../../../composables/useCe";

export type Props = {
  value?: InputHTMLAttributes["value"];
  type: InputHTMLAttributes["type"];
  name: InputHTMLAttributes["name"];
  placeholder?: InputHTMLAttributes["placeholder"];
  required?: InputHTMLAttributes["required"];
  minlength?: InputHTMLAttributes["minlength"];
  maxlength?: InputHTMLAttributes["maxlength"];
  invalid?: boolean;
};

export type Emits = ClipboardEventNames | InputEventNames;

const definedProps = withDefaults(defineProps<Props>(), {
  type: "text",
  required: false,
  invalid: false,
});

const emit = defineEmits<EventEmitHelper<Emits>>();

const valueLength = ref<number>(0);

const { internals, props, customEventEmit } = useCe(definedProps, emit);

const maxlengthElement = computed(() => {
  const isMinlength = props.value.minlength !== undefined;
  const isMaxlength = props.value.maxlength !== undefined;

  if (!isMinlength && !isMaxlength) {
    return null;
  }

  return (
    <span class="length">
      {isMinlength && <span>{`${props.value.minlength} <= `}</span>}
      {valueLength.value}
      {isMaxlength && <span>{` <= ${props.value.maxlength}`}</span>}
    </span>
  );
});

const requiredElement = computed(() => {
  if (props.value.required === undefined) {
    return null;
  }

  return <span class="required">*</span>;
});

const getValueLength = (value: Props["value"]) => {
  if (!value) {
    return 0;
  }

  switch (props.value.type) {
    case "text": {
      return value.length;
    }
    case "number": {
      return value;
    }
    default: {
      if (typeof value === "string") {
        return value.length;
      }
      else if (!Number.isNaN(Number(value))) {
        return value;
      }

      return 0;
    }
  }
};

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;

  valueLength.value = getValueLength(target.value);
  if (internals.value) {
    internals.value.setFormValue(target.value);
  }

  customEventEmit("onInput", e);
};

const handleChange = (e: Event) => {
  customEventEmit("onChange", e);
};

defineRender(() => (
  <label class="n-label">
    <div class="header">
      <span class="label">
        <slot name="label">
          {props.value.name}
        </slot>
        {requiredElement.value}
      </span>
      <span class="options">
        {maxlengthElement.value}
      </span>
    </div>
    <input
      {...props.value}
      required={props.value.required}
      onInput={handleInput}
      onChange={handleChange}
      class={clsx("n-input", { "-invalid": props.value.invalid })}
    />
    <div v-if={props.value.invalid} class="error">
      <slot name="error" />
    </div>
  </label>
));
</script>

<style lang="scss">
.n-label {
  display: flex;
  flex-direction: column;
  gap: var(--n-1);
  font-size: var(--n-3);
  color: var(--cs-text-secondary);

  > .header {
    display: flex;
    justify-content: space-between;
    padding: 0 var(--n-2);

    > .label {
      display: flex;
      gap: var(--n-1);
      color: var(--cs-text-primary);

      > .required {
        color: var(--p-red-400);
      }
    }

    > .options {
      display: flex;
    }
  }

  > .error {
    margin-top: var(--n-2);
  }
}

.n-input {
  position: relative;
  box-sizing: border-box;
  padding: var(--n-3) var(--n-5);
  font-size: var(--n-4);
  color: var(--cs-text-primary);
  background: transparent;
  border: none;
  border-radius: var(--n-2);
  outline: 1px solid var(--cs-neutral-400);
  outline-offset: -1.5px;

  &:not([value=""], :placeholder-shown) {
    outline-color: var(--cs-text-primary);
  }

  &::placeholder {
    color: var(--cs-neutral-300);
  }

  &.-invalid {
    color: var(--p-red-400);
    background-color: color-mix(in srgb, var(--p-red-400) 20%, transparent);
    outline-color: var(--p-red-400);

    &::placeholder {
      color: var(--p-red-300);
    }
  }

  &::after {
    position: absolute;
    inset: 0;
    border-radius: var(--n-2);
    outline: 1px solid var(--cs-neutral-600);
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
</style>
