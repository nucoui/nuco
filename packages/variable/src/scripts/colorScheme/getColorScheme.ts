/**
 * Get the color scheme of the user's operating system.
 *
 * @annotation
 * Only use client side. Can not be used in server side rendering.
 */
export const getColorScheme = () => {
  const dataColorScheme = document.documentElement.getAttribute("data-color-scheme");

  if (dataColorScheme === "dark" || dataColorScheme === "light") {
    return dataColorScheme;
  }

  const prefersColorSchemeMedia = window.matchMedia("(prefers-color-scheme: dark)");

  return prefersColorSchemeMedia.matches ? "dark" : "light";
};
