import type { NElementNames, NElements } from "@/main";
import { resisterNElement } from "@/main";

function camelToKebabCase(str: string): string {
  return str.replace(/([a-z0-9]?)([A-Z])/g, "$1-$2").toLowerCase();
}

export const renderElement = <Name extends NElementNames>(name: Name, elementClass: NElements[Name], attr: Record<string, any>) => {
  resisterNElement(name, elementClass);

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
