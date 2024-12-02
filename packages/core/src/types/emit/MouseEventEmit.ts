export interface MouseEventEmit {
  (e: "onClick", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onContextMenu", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onDoubleClick", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onDrag", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onDragEnd", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onDragEnter", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onDragExit", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onDragLeave", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onDragOver", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onDragStart", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onDrop", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onMouseDown", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onMouseEnter", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onMouseLeave", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onMouseMove", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onMouseOut", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onMouseOver", eventInitDict: CustomEventInit, event: Event): void;
  (e: "onMouseUp", eventInitDict: CustomEventInit, event: Event): void;
}
