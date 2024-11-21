<script lang="tsx" setup>
import { type InputHTMLAttributes, ref } from "vue";
import { useCe } from "../../composables/useCe";

/* @vue-ignore */
type Props = InputHTMLAttributes;

const definedProps = withDefaults(defineProps<Props>(), {
  type: "text",
  required: false,
});

const emit = defineEmits(["update:value"]);

const inputRef = ref<HTMLInputElement | null>(null);
const { internals, props } = useCe(inputRef, definedProps);

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

const valueLength = ref<number>(0);

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;

  valueLength.value = getValueLength(target.value);
  if (internals.value) {
    internals.value.setFormValue(target.value);
  }

  emit("update:value", target.value);
};

defineRender(() => (
  <label class="nuko-label">
    <div class="info">
      <span class="label">
        <slot name="label">
          {props.value.name}
        </slot>
        {props.value.required && <span class="required">*</span>}
      </span>
      <span class="options">
        {valueLength.value}
        {
          props.value.maxlength
          && (
            <span class="max-length">
              <span>{"<="}</span>
              {props.value.maxlength}
            </span>
          )
        }
      </span>
    </div>
    <input
      {...props.value}
      ref={inputRef}
      onInput={handleInput}
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

  > .info {
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
}
</style>
