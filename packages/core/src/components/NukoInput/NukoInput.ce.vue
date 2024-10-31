<script lang="tsx" setup>
import type { InputHTMLAttributes } from "vue";
import { defineEmits, onMounted, ref, useHost, watch } from "vue";

type Props = InputHTMLAttributes;

const {
  type = "text",
  name,
  value,
  placeholder,
  ...attrs
} = defineProps<Props>();
const emit = defineEmits(["update:value"]);

const host = useHost();
const inputRef = ref<HTMLInputElement | null>(null);
const internals = ref<ElementInternals | null>(null);

onMounted(() => {
  if (inputRef.value) {
    const attachedInternals = host?.attachInternals();
    if (attachedInternals) {
      internals.value = attachedInternals;
    }
    inputRef.value.addEventListener("input", () => {
      if (internals.value) {
        internals.value.setFormValue(inputRef.value?.value || "");
      }
      emit("update:value", inputRef.value?.value || "");
    });
  }
});

watch(() => value, (newValue) => {
  if (newValue && inputRef.value && inputRef.value.value !== newValue) {
    inputRef.value.value = newValue;
  }
});

defineRender(() => (
  <label class="nuko-label">
    <slot name="label">
      {name}
    </slot>
    <input
      ref={inputRef}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      {...attrs}
      class="nuko-input"
    />
  </label>
));
</script>

<style lang="scss">
@import url("/src/styles/reset.css");
@import url("/src/styles/base.css");

.nuko-input {
  position: relative;
  padding: var(--n-2) var(--n-4);
  font-size: var(--n-4);
  border: 1px solid var(--p-natural-300);
  border-radius: var(--n-1);

  &:not([disabled]):focus {
    outline: 2px solid var(--p-natural-400);
    outline-offset: 2px;
    transition: all 0.1s ease-in-out;
  }

  &::placeholder {
    color: var(--p-natural-300);
  }
}

.nuko-label {
  display: flex;
  flex-direction: column;
  gap: var(--n-1);
  font-size: var(--n-3);
  color: var(--p-natural-500);
}
</style>
