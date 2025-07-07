import { css } from "@nuco/variable";
import { theme } from "./utils/theme";
import "@nuco/variable/css";
import "./preview.css";

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
    options: {
      // 👇 Default options
      dark: { name: "Dark mode", value: css.semanticColor.dark.background.primary },
      light: { name: "Light mode", value: css.semanticColor.light.background.primary },
    },
  },
};

export const initialGlobals = {
  backgrounds: { value: css.semanticColor.dark.background.primary },
};

const withTheme = (StoryFn, context) => {
  if (context.globals.backgrounds) {
    document.documentElement.setAttribute("data-color-scheme", context.globals.backgrounds.value);
  }

  return StoryFn();
};

export const decorators = [withTheme];
