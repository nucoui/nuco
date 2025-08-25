import { genSD } from "chatora";

export const defineElement = (chatoraComponent: Parameters<typeof genSD>[0]) => {
  const tagName = chatoraComponent.name.replace(/([A-Z])/g, match => `-${match.toLowerCase()}`).replace(/^-/, "");
  if (!customElements.get(tagName)) {
    customElements.define(tagName, genSD(chatoraComponent));
  }
  return tagName;
};
