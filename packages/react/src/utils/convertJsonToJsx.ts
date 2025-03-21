import type { JsonNode } from "@/types/JsonNode";
import { Children, type JSX, type ReactNode } from "react";
import { jsx } from "react/jsx-runtime";

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

function convertJsonToJsx(jsonNodes: JsonNode[], slotChildren?: ReactNode): JSX.Element[] {
  return jsonNodes.map((node, index): JSX.Element => {
    if (node.tag === "text") {
      return jsx("span", { children: node.text }, index); // テキストノードをspanでラップして返します
    }
    if (node.tag === "input") {
      return jsx("input", { ...node.attr }, index);
    }
    else {
      let children: JSX.Element[] | ReactNode | null = node.children.length > 0 ? convertJsonToJsx(node.children, slotChildren) : null;

      // slot要素の場合、slotChildrenを設定
      if (node.tag === "slot") {
        if (node.attr.name && slotChildren) {
          const namedSlotChildren = Children.toArray(slotChildren).filter(
            (child: any) => child.props?.slot === node.attr.name,
          );
          children = namedSlotChildren.length > 0 ? namedSlotChildren : null;
        }
        else if (slotChildren) {
          const namedSlotChildren = Children.toArray(slotChildren).filter(
            (child: any) => !child.props?.slot,
          );
          children = namedSlotChildren.length > 0 ? namedSlotChildren : null;
        }
      }

      const { children: attrChildren, style, ...rest } = node.attr;
      const styleObject = style ? parseStyleString(style) : undefined;
      return jsx(node.tag as any, { ...rest, style: styleObject, children: children || node.children.map(child => convertJsonToJsx([child], slotChildren)[0]) }, index);
    }
  });
}

export { convertJsonToJsx };
