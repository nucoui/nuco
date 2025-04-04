import type { Comment as HastComment, Element as HastElement, Text as HastText } from "hast";
import {
  type Comment,
  type Element,
  type Node,
  NodeTypes,
  type Text,
} from "./nodeOps";

/**
 * Nodeをhastノードに変換する関数
 * @param node - Node
 * @param seen - 循環参照を防ぐためのWeakSet
 * @returns hastノード
 */
export function serializeHastInner(
  node: Element | Text | Comment,
  seen = new WeakSet<Node>(),
): HastElement | HastText | HastComment | null {
  if (seen.has(node)) {
    return null; // 循環参照を防ぐ
  }
  seen.add(node);

  if (node.type === NodeTypes.ELEMENT) {
    return serializeHastElement(node, seen);
  }

  if (node.type === NodeTypes.TEXT || node.type === NodeTypes.COMMENT) {
    return serializeHastTextOrComment(node);
  }

  return null;
}

/**
 * ElementをhastのElementに変換
 * @param node - Element
 * @param seen - 循環参照を防ぐためのWeakSet
 * @returns hastのElement
 */
function serializeHastElement(
  node: Element,
  seen: WeakSet<Node>,
): HastElement {
  const children = node.children
    .map(child => serializeHastInner(child, seen))
    .filter((child): child is HastElement | HastText | HastComment => child !== null);

  return {
    type: "element",
    tagName: node.tag,
    properties: node.props,
    children,
  };
}

/**
 * TextまたはCommentをhastのTextまたはCommentに変換
 * @param node - TextまたはComment
 * @returns hastのTextまたはComment
 */
function serializeHastTextOrComment(
  node: Text | Comment,
): HastText | HastComment {
  if (node.type === NodeTypes.TEXT) {
    return {
      type: "text",
      value: node.text,
    };
  }
  else {
    return {
      type: "comment",
      value: node.text,
    };
  }
}
