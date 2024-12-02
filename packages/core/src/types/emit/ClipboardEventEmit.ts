export interface ClipboardEventEmit {
  (e: "onCopy", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onCut", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onPaste", eventInitDict: CustomEventInit, event: Event): void;
}
