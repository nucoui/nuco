import type { EventHandlers } from "@/types/EventHandlers";
import type { ReactNode } from "react";

export type Props<RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string> = ElementProps & EventHandlers<RefType, ElementEmits> & { children?: ReactNode | undefined };
