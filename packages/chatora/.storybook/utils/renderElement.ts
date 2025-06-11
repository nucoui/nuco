export const renderElement = (tag: string, customElement: CustomElementConstructor, slot: string | undefined, args: Record<string, any> = {}) => {
  if (!customElements.get(tag)) {
    customElements.define(tag, customElement);
  }

  const element = document.createElement(tag);
  Object.entries(args).forEach(([key, value]) => {
    if (key.startsWith("on")) {
      element.addEventListener(key.slice(2).toLowerCase(), value);
    }
    else {
      element.setAttribute(key, value);
    }
  });

  if (slot !== undefined) {
    element.innerHTML = slot;
  }
  else {
    element.innerHTML = "";
  }

  return element.outerHTML;
};
