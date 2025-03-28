import type { R } from "shiki/dist/types/index.d.mjs";
import { h, type VNode } from "vue";

/**
 * style属性をオブジェクト形式に変換する関数
 * @param styleString - 文字列形式のstyle属性
 * @returns オブジェクト形式のstyle属性
 */
const parseStyleString = (styleString: string): { [key: string]: string } => {
  return styleString.split(";").reduce((styleObject, styleProperty) => {
    const [key, value] = styleProperty.split(":").map(str => str.trim());
    if (key && value) {
      styleObject[key] = value;
    }
    return styleObject;
  }, {} as { [key: string]: string });
};

/**
 * JSONノードをVNodeに変換する関数
 * @param node - JSONノード
 * @returns VNode
 */
const convertNodeToVNode = (node: R["children"][number]): VNode => {
  if (node.type === "text") {
    return h("span", {}, node.value);
  }

  if (node.type === "comment") {
    return h("!", {}, node.value);
  }

  if (node.type === "element") {
    const { tagName, properties, children } = node;
    const styleObject = properties.style ? parseStyleString(properties.style as string) : undefined;
    const props = { ...properties, style: styleObject };
    const childNodes = children.map(convertNodeToVNode);
    return h(tagName, props, childNodes);
  }

  return h("div", {}, "Unsupported node type");
};

const convertHastToVNodes = (root: R): VNode[] => {
  return root.children.map(convertNodeToVNode);
};

export { convertHastToVNodes };
