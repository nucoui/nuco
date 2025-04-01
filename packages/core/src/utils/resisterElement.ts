import type { ElementsMap, ElementsName } from "@/utils/elements";

export const resisterElement = <Name extends ElementsName>(name: Name, element: ElementsMap[Name]) => {
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
