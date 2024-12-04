<script lang="tsx" setup>
import type { EventEmitHelper } from "../../types/emit/EventEmit/EventEmits";
import type { ClipboardEventNames, InputEventNames } from "../../types/emit/EventEmit/EventNames";
import { computed, type InputHTMLAttributes, ref } from "vue";
import { useCe } from "../../composables/useCe";

export type Props = {
  value?: InputHTMLAttributes["value"];
  type: InputHTMLAttributes["type"];
  name: InputHTMLAttributes["name"];
  placeholder?: InputHTMLAttributes["placeholder"];
  required?: InputHTMLAttributes["required"];
  minlength?: InputHTMLAttributes["minlength"];
  maxlength?: InputHTMLAttributes["maxlength"];
};

export type Emits = ClipboardEventNames | InputEventNames;

const definedProps = withDefaults(defineProps<Props>(), {
  type: "text",
  required: false,
});

const emit = defineEmits<EventEmitHelper<Emits>>();

const inputRef = ref<HTMLInputElement | null>(null);
const valueLength = ref<number>(0);

const { internals, props } = useCe(inputRef, definedProps);

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

  emit("onInput", { bubbles: true, composed: true }, e);
};

const handleChange = (e: Event) => {
  emit("onChange", { bubbles: true, composed: true }, e);
};

defineRender(() => (
  <label class="nuko-label">
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
      ref={inputRef}
      required={props.value.required}
      onInput={handleInput}
      onChange={handleChange}
      class="nuko-input"
    />
  </label>
));
</script>

<style lang="scss">
.nuko-label {
  display: flex;
  flex-direction: column;
  gap: var(--n-1);
  font-size: var(--n-3);
  color: var(--cs-text-secondary);

  > .header {
    display: flex;
    justify-content: space-between;

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
}

.nuko-input {
  position: relative;
  padding: var(--n-2) var(--n-4);
  font-size: var(--n-4);
  color: var(--cs-text-primary);
  background: transparent;
  border: none;
  border: 1px solid var(--cs-neutral-400);
  border-radius: var(--n-1);

  &:not([value=""], :placeholder-shown) {
    border-color: var(--cs-text-primary);
  }

  &::placeholder {
    color: var(--cs-neutral-300);
  }

  &:invalid {
    color: var(--p-red-400);
    border-color: var(--p-red-400);
  }
}
</style>
