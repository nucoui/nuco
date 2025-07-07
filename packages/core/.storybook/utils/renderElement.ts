export const renderElement = (tag: string, customElement: CustomElementConstructor, slot: Node | string | undefined, args: Record<string, any> = {}) => {
  if (!customElements.get(tag)) {
    customElements.define(tag, customElement);
  }

  const element = document.createElement(tag);
  Object.entries(args).forEach(([key, value]) => {
    if (key.startsWith("on")) {
      element.addEventListener(key.slice(2).toLowerCase(), value);
    }
    else {
      if (value === null || value === undefined) {
        element.removeAttribute(key);
      }
      else if (typeof value === "boolean") {
        value ? element.setAttribute(key, "true") : element.removeAttribute(key);
      }
      else {
        element.setAttribute(key, value);
      }
    }
  });

  if (slot !== undefined) {
    if (typeof slot === "string") {
      element.innerHTML = slot;
    }

    if (slot instanceof Node) {
      element.appendChild(slot);
    }
  }
  else {
    element.innerHTML = "";
  }

  return element.outerHTML;
};
