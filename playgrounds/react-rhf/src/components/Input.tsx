import type { NukoInputProps } from "@nuko/core";
import type { ChangeEvent, FC } from "react";
import { resisterElement } from "@nuko/core";
import { useEffect, useRef } from "react";

resisterElement("nuko-input");

export const Input: FC<NukoInputProps & {
  onInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  const {
    onInput,
    onChange,
    name,
    value,
    placeholder,
    required,
    maxlength,
    minlength,
    // ...attr
  } = props;

  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    function onCustomEvent(event: CustomEvent) {
      if (!event.detail)
        return;
      // console.log((event as CustomEvent).detail[1].target.value);
      onInput?.(event.detail[1]);
    }

    if (currentRef) {
      currentRef.addEventListener("onInput", onCustomEvent as EventListener);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("onInput", onCustomEvent as EventListener);
      }
    };
  }, [onInput]);

  useEffect(() => {
    const currentRef = ref.current;
    function onCustomEvent(event: CustomEvent) {
      if (!event.detail)
        return;
      // console.log((event as CustomEvent).detail[1].target.value);
      onChange?.(event.detail[1]);
    }

    if (currentRef) {
      currentRef.addEventListener("onChange", onCustomEvent as EventListener);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("onChange", onCustomEvent as EventListener);
      }
    };
  }, [onChange]);

  return (
    <nuko-input
      // {...attr}
      ref={ref}
      name={name}
      value={value}
      placeholder={placeholder}
      required={Boolean(required)}
      maxLength={maxlength ? Number(maxlength) : undefined}
      minLength={
        minlength ? Number(minlength) : undefined
      }
    />
  );
};
