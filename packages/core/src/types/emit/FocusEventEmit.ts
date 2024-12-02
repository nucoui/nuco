export interface FocusEventEmit {
  (e: "onFocus", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onBlur", eventInitDict: CustomEventInit, event: Event): void;
}
