export type ClipboardEventNames = "copy" | "cut" | "paste";
export type FocusEventNames = "focus" | "blur";
export type InputEventNames = "input" | "change";
export type KeyboardEventNames = "keyDown" | "keyPress" | "keyUp";
export type MouseEventNames =
  | "click"
  | "contextMenu"
  | "doubleClick"
  | "drag"
  | "dragEnd"
  | "dragEnter"
  | "dragExit"
  | "dragLeave"
  | "dragOver"
  | "dragStart"
  | "drop"
  | "mouseDown"
  | "mouseEnter"
  | "mouseLeave"
  | "mouseMove"
  | "mouseOut"
  | "mouseOver"
  | "mouseUp";

export type EventNames = ClipboardEventNames | FocusEventNames | InputEventNames | KeyboardEventNames | MouseEventNames;

export type ExtractEventName<T extends EventNames> = Extract<EventNames, T>;
