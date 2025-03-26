import type { ElementNames } from "@/main";
import { resisterElement } from "@/main";

function camelToKebabCase(str: string): string {
  return str.replace(/([a-z0-9]?)([A-Z])/g, "$1-$2").toLowerCase();
}

export const renderElement = (name: ElementNames, attr: Record<string, any>) => {
  resisterElement(name);

  const element = document.createElement(name);

  for (const key in attr) {
    if (typeof attr[key] === "boolean") {
      if (attr[key]) {
        element.setAttribute(camelToKebabCase(key), "");
      }
      else {
        element.removeAttribute(camelToKebabCase(key));
      }
      continue;
    }

    if (typeof attr[key] === "object") {
      element.setAttribute(camelToKebabCase(key), JSON.stringify(attr[key]));
      continue;
    }

    element.setAttribute(camelToKebabCase(key), (attr as Record<string, any>)[key]);
  }

  return element;
};
