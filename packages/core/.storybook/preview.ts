import { css } from "@nuco/variable";
import { theme } from "./utils/theme";
import "@nuco/variable/css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme,
  },
  backgrounds: {
    default: "dark",
    values: [
      { name: "light", value: css.semanticColor.light.background.primary },
      { name: "dark", value: css.semanticColor.dark.background.primary },
    ],
  },
};

const withTheme = (StoryFn, context) => {
  if (context.globals.backgrounds) {
    const theme = context.globals.backgrounds.value === css.semanticColor.light.background.secondary ? "light" : "dark";
    document.documentElement.setAttribute("data-color-scheme", theme);
  }

  return StoryFn();
};

export const decorators = [withTheme];
