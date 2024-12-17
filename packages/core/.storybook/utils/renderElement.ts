import type { ElementNames } from "@/main";
import { resisterElement } from "@/main";

export const renderElement = (name: ElementNames, attr: Record<string, any>) => {
  resisterElement(name);

  const element = document.createElement(name);

  for (const key in attr) {
    if (typeof attr[key] === "boolean") {
      if (attr[key]) {
        element.setAttribute(key, "");
      }
      else {
        element.removeAttribute(key);
      }
      continue;
    }
    element.setAttribute(key, (attr as Record<string, any>)[key]);
  }

  return element;
};
