<script lang="tsx" setup>
import { toRefs } from "@vueuse/core";
import { computed, type InputHTMLAttributes, provide, ref, watch } from "vue";
import { useCe } from "../../composables/useCe";

/* @vue-ignore */
type Props = InputHTMLAttributes;

const props = defineProps<Props>();
const emit = defineEmits(["update:value"]);
const {
  value,
  name,
  required,
  type,
  maxlength,
} = props;

const propsRef = toRefs(props);
const inputRef = ref<HTMLInputElement | null>(null);
const valueRef = ref(value);
const valueLength = computed(() => {
  if (!valueRef.value) {
    return 0;
  }

  switch (type) {
    case "text": {
      return valueRef.value.length;
    }
    case "number": {
      return valueRef.value;
    }
    default: {
      if (typeof valueRef.value === "string") {
        return valueRef.value.length;
      }
      else if (!Number.isNaN(Number(valueRef.value))) {
        return valueRef.value;
      }

      return 0;
    }
  }
});

const { internals, propsInjectionKey } = useCe(inputRef);

provide(propsInjectionKey, propsRef);

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;

  valueRef.value = target.value;
  if (internals.value) {
    internals.value.setFormValue(target.value);
  }
  emit("update:value", target.value);
};

watch(() => value, (newValue) => {
  if (newValue && inputRef.value && inputRef.value.value !== newValue) {
    inputRef.value.value = newValue;
  }
});

defineRender(() => (
  <label class="nuko-label">
    <div class="info">
      <span class="label">
        <slot name="label">
          {name}
        </slot>
        {required && <span class="required">*</span>}
      </span>
      <span class="options">
        {valueLength.value}
        {
          maxlength
          && (
            <span class="max-length">
              <span>{"<="}</span>
              {maxlength}
            </span>
          )
        }
      </span>
    </div>
    <input
      {...props}
      value={valueRef.value}
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
