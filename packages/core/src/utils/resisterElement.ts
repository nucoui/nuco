import type { NElementNames, NElements } from "@/utils/elements";

export const resisterNElement = <Name extends NElementNames>(name: Name, element: NElements[Name]) => {
  if (!customElements) {
    console.warn("Custom elements are not supported in this environment.");
    return;
  }

  if (customElements.get(name)) {
    return;
  }

  try {
    customElements.define(name, element);
  }
  catch (error) {
    console.error(error);
  }
};
