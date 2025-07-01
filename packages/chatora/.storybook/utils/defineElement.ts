import { functionalCustomElement } from "chatora";

export const defineElement = (chatoraComponent: Parameters<typeof functionalCustomElement>[0]) => {
  const tagName = chatoraComponent.name.replace(/([A-Z])/g, match => `-${match.toLowerCase()}`).replace(/^-/, "");
  if (!customElements.get(tagName)) {
    customElements.define(tagName, functionalCustomElement(chatoraComponent));
  }
  return tagName;
};
