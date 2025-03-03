/**
 * Functions for defining and automatically detecting changes to the `data-color-scheme` attribute needed to determine the value of the applied css variable
 *
 * @annotation
 * Only use client side. Can not be used in server side rendering.
 */
export const defineColorScheme = () => {
  const htmlElement = document.documentElement;

  const prefersColorSchemeMedia = window.matchMedia("(prefers-color-scheme: dark)");
  prefersColorSchemeMedia.addEventListener("change", (e) => {
    const isDark = e.matches;
    htmlElement.setAttribute("data-color-scheme", isDark ? "dark" : "light");
  });

  if (!htmlElement.getAttribute("data-color-scheme")) {
    const isDark = prefersColorSchemeMedia.matches;
    htmlElement.setAttribute("data-color-scheme", isDark ? "dark" : "light");
  }
};
