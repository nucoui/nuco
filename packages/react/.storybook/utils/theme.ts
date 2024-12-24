import { css } from "@nuko/variable";
import { create } from "@storybook/theming/create";

export const theme = create({
  base: "dark",
  // Typography
  fontBase: "Poppins, \"Noto Sans JP\", sans-serif",
  fontCode: "monospace",

  brandTitle: "@nuko/react",
  // brandUrl: "",
  // brandImage: "https://storybook.js.org/images/placeholders/350x150.png",
  brandTarget: "_self",

  //
  colorPrimary: css.permissibleColor.app[400],
  colorSecondary: css.permissibleColor.app[600],

  // UI
  appBg: css.semanticColor.dark.background.primary,
  appContentBg: css.semanticColor.dark.background.primary,
  appPreviewBg: css.semanticColor.dark.background.primary,
  appBorderColor: css.semanticColor.dark.border.secondary,
  appBorderRadius: 8,

  // Text colors
  textColor: css.semanticColor.dark.text.primary,
  textInverseColor: css.semanticColor.dark.background.secondary,

  // Toolbar default and active colors
  barTextColor: css.permissibleColor.app[600],
  barSelectedColor: css.permissibleColor.app[300],
  barHoverColor: css.permissibleColor.app[500],
  barBg: css.semanticColor.dark.background.primary,

  // Form colors
  inputBg: css.semanticColor.dark.background.secondary,
  inputBorder: css.semanticColor.dark.border.primary,
  inputTextColor: css.semanticColor.dark.text.primary,
  inputBorderRadius: 4,
});
