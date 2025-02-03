/**
 * Set color scheme for the website.
 *
 * @annotation
 * Only use client side. Can not be used in server side rendering.
 */
export const setColorScheme = (scheme: "dark" | "light" | "system") => {
  const htmlElement = document.documentElement;

  htmlElement.setAttribute("data-color-scheme", scheme);
};
