export interface InputEventEmit {
  (e: "onInput", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onChange", eventInitDict: CustomEventInit, event: Event): void;
}
