import { permissibleColor } from "./permissibleColor";

type SemanticColorRule = Record<"light" | "dark", Partial<Record<"background" | "text" | "border", Partial<Record<"primary" | "secondary", string>>>>>;

export const semanticColor = {
  light: {
    background: {
      primary: permissibleColor.natural[200],
      secondary: permissibleColor.natural[100],
    },
    text: {
      primary: permissibleColor.natural[900],
      secondary: permissibleColor.natural[500],
    },
    border: {
      primary: permissibleColor.natural[600],
    },
  },
  dark: {
    background: {
      primary: permissibleColor.natural[900],
      secondary: permissibleColor.natural[800],
    },
    text: {
      primary: permissibleColor.natural[100],
      secondary: permissibleColor.natural[500],
    },
    border: {
      primary: permissibleColor.natural[600],
    },
  },
} as const satisfies SemanticColorRule;
