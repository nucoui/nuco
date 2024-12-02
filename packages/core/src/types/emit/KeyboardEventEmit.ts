export interface KeyboardEventEmit {
  (e: "onKeyDown", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onKeyPress", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onKeyUp", eventInitDict: CustomEventInit, event: Event): void;
}
