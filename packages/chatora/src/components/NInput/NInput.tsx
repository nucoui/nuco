import type { CC } from "chatora";
import { toBoolean, toNumber, toString } from "@chatora/util";
import { Host } from "chatora/jsx-runtime";
import clsx from "clsx";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NInput.scss?raw";

export type Props = {
  value?: string;
  type?: "text" | "number" | "email" | "password" | "url" | "tel";
  name?: string;
  placeholder?: string;
  required?: boolean;
  minlength?: number;
  maxlength?: number;
  invalid?: boolean;
};

export type Emits = {
  "on-input": Event;
  "on-change": Event;
};

export const NInput: CC<Props, Emits> = ({
  reactivity: { computed, signal },
  defineProps,
  defineEmits,
  getInternals,
}) => {
  const props = defineProps({
    value: v => toString(v) ?? "",
    type: (v) => {
      const typeValue = toString(v);
      if (typeValue && ["text", "number", "email", "password", "url", "tel"].includes(typeValue)) {
        return typeValue as "text" | "number" | "email" | "password" | "url" | "tel";
      }
      return "text";
    },
    name: v => toString(v),
    placeholder: v => toString(v),
    required: v => toBoolean(v) ?? false,
    minlength: v => toNumber(v),
    maxlength: v => toNumber(v),
    invalid: v => toBoolean(v) ?? false,
  });

  const emits = defineEmits({
    "on-input": () => {},
    "on-change": () => {},
  });

  const internals = getInternals();

  const [valueLength, setValueLength] = signal(0);

  const requiredElement = computed(() => {
    if (!props().required) {
      return null;
    }

    return <span class="required">*</span>;
  });

  const maxlengthElement = computed(() => {
    const isMinlength = props().minlength !== undefined;
    const isMaxlength = props().maxlength !== undefined;

    if (!isMinlength && !isMaxlength) {
      return null;
    }

    return (
      <span class="length">
        {isMinlength && <span>{`${props().minlength} <= `}</span>}
        {valueLength()}
        {isMaxlength && <span>{` <= ${props().maxlength}`}</span>}
      </span>
    );
  });

  const getValueLength = (value: Props["value"]) => {
    if (!value) {
      return 0;
    }

    switch (props().type) {
      case "text": {
        return value.length;
      }
      case "number": {
        return toNumber(value) || 0;
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

    setValueLength(getValueLength(target.value));
    if (internals) {
      internals.setFormValue(target.value);
    }

    emits("on-input", e);
  };

  const handleChange = (e: Event) => {
    emits("on-change", e);
  };

  return () => (
    <Host style={[style, resetStyle]}>
      <label class="n-label">
        <div class="header">
          <span class="label">
            <slot name="label">
              {props().name}
            </slot>
            {requiredElement()}
          </span>
          <span class="options">
            {maxlengthElement()}
          </span>
        </div>
        <input
          {...props()}
          required={props().required}
          onInput={handleInput}
          onChange={handleChange}
          class={clsx("n-input", { "-invalid": props().invalid })}
        />
        <div v-if={props().invalid} class="error">
          <slot name="error" />
        </div>
      </label>
    </Host>
  );
};
