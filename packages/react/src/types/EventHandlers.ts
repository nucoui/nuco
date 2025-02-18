import type { Upper } from "@/types/Upper";
import type { SyntheticEvent } from "react";

export type EventHandlers<RefType extends HTMLElement, ElementEmits extends string | never> = {
  [K in Upper<ElementEmits>]?: (e: SyntheticEvent<RefType>) => void;
};
