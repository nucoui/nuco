import type { JsonNode } from "@/types/JsonNode";
import { Children, type JSX, type ReactNode } from "react";
import { jsx } from "react/jsx-runtime";

function convertJsonToJsx(jsonNodes: JsonNode[], slotChildren?: ReactNode): JSX.Element[] {
  return jsonNodes.map((node, index): JSX.Element => {
    if (node.tag === "text") {
      return jsx("span", { children: node.text }, index); // テキストノードをspanでラップして返します
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

      const { children: attrChildren, ...rest } = node.attr;
      return jsx(node.tag as any, { ...rest, children: children || node.children.map(child => convertJsonToJsx([child], slotChildren)[0]) }, index);
    }
  });
}

export { convertJsonToJsx };
