import { permissibleColor } from "./permissibleColor";

type SemanticColorRule = Record<"light" | "dark", Partial<Record<"background" | "text" | "border", Partial<Record<"primary" | "secondary", string>>>>>;

export const semanticColor = {
  light: {
    background: {
      primary: permissibleColor.neutral[200],
      secondary: permissibleColor.neutral[100],
    },
    text: {
      primary: permissibleColor.neutral[900],
      secondary: permissibleColor.neutral[500],
    },
    border: {
      primary: permissibleColor.neutral[600],
    },
  },
  dark: {
    background: {
      primary: permissibleColor.neutral[900],
      secondary: permissibleColor.neutral[800],
    },
    text: {
      primary: permissibleColor.neutral[100],
      secondary: permissibleColor.neutral[500],
    },
    border: {
      primary: permissibleColor.neutral[600],
    },
  },
} as const satisfies SemanticColorRule;
