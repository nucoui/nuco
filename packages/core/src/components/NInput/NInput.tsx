import { computed, createCC, getInternals, signal } from "chatora";
import { Host } from "chatora/jsx-runtime";
import { toBoolean, toNumber, toString } from "chatora/util";
import clsx from "clsx";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NInput.scss?raw";

/**
 * Props for NInput component
 */
export type Props = {
  /**
   * Input value
   */
  value?: string;
  /**
   * Input type
   * @default "text"
   */
  type?: "text" | "number" | "email" | "password" | "url" | "tel";
  /**
   * Input name
   */
  name?: string;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Whether input is required
   * @default false
   */
  required?: boolean;
  /**
   * Minimum length
   */
  minlength?: number;
  /**
   * Maximum length
   */
  maxlength?: number;
  /**
   * Whether input is invalid
   * @default false
   */
  invalid?: boolean;
};

/**
 * Emits for NInput component
 */
export type Emits = {
  /**
   * Fired when input value changes
   */
  "on-input"?: Event;
  /**
   * Fired when input loses focus and value changes
   */
  "on-change"?: Event;
};

export const {
  component: NInput,
  genSD: genSDNInput,
  genDSD: genDSDNInput,
  define: defineNInput,
} = createCC<Props, Emits>("n-input", ({ defineProps, defineEmits }) => {
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
  const valueLength = signal(0);

  /**
   * Render required mark
   */
  const requiredElement = computed(() => {
    if (!props().required) {
      return null;
    }
    return <span class="required">*</span>;
  });

  /**
   * Render length info
   */
  const maxlengthElement = computed(() => {
    const isMinlength = props().minlength !== undefined;
    const isMaxlength = props().maxlength !== undefined;
    if (!isMinlength && !isMaxlength) {
      return null;
    }
    return (
      <span class="length">
        {isMinlength && <span>{`${props().minlength} <= `}</span>}
        {valueLength.value}
        {isMaxlength && <span>{` <= ${props().maxlength}`}</span>}
      </span>
    );
  });

  /**
   * Get value length for input
   */
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

  /**
   * Handle input event
   */
  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    valueLength.set(getValueLength(target.value));
    if (internals.value) {
      internals.value.setFormValue(target.value);
    }
    emits("on-input", e);
  };

  /**
   * Handle change event
   */
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
            {requiredElement.value}
          </span>
          <span class="options">
            {maxlengthElement.value}
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
}, {
  formAssociated: true,
});
