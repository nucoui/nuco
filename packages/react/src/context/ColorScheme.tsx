import type { getColorScheme } from "@nuco/variable";
import { createContext } from "react";

export type ContextValue = ReturnType<typeof getColorScheme>;

export const ColorSchemeContext = createContext<ContextValue>("light");
