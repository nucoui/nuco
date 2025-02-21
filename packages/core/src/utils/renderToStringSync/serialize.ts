import { isOn } from "@vue/shared";
import {
  type TestComment,
  type TestElement,
  type TestNode,
  TestNodeTypes,
  type TestText,
} from "./nodeOps";

export function serialize(
  node: TestNode,
  indent: number = 0,
  depth: number = 0,
  seen = new WeakSet<TestNode>(),
): string {
  if (seen.has(node)) {
    return "[Circular]";
  }
  seen.add(node);

  if (node.type === TestNodeTypes.ELEMENT) {
    return serializeElement(node, indent, depth, seen);
  }
  else {
    return serializeText(node, indent, depth);
  }
}

export function serializeInner(
  node: TestElement,
  indent: number = 0,
  depth: number = 0,
  seen = new WeakSet<TestNode>(),
): string {
  const newLine = indent ? `\n` : ``;
  return node.children.length
    ? newLine
    + node.children.map(c => serialize(c, indent, depth + 1, seen)).join(newLine)
    + newLine
    : ``;
}

function serializeElement(
  node: TestElement,
  indent: number,
  depth: number,
  seen: WeakSet<TestNode>,
): string {
  const props = Object.keys(node.props)
    .map((key) => {
      const value = node.props[key];
      return isOn(key) || value == null
        ? ``
        : value === ``
          ? key
          : `${key}=${JSON.stringify(value, (key, value) => {
            if (typeof value === "object" && value !== null) {
              if (seen.has(value)) {
                return "[Circular]";
              }
              seen.add(value);
            }
            return value;
          })}`;
    })
    .filter(Boolean)
    .join(" ");
  const padding = indent ? ` `.repeat(indent).repeat(depth) : ``;
  return (
    `${padding}<${node.tag}${props ? ` ${props}` : ``}>`
    + `${serializeInner(node, indent, depth, seen)}`
    + `${padding}</${node.tag}>`
  );
}

function serializeText(
  node: TestText | TestComment,
  indent: number,
  depth: number,
): string {
  const padding = indent ? ` `.repeat(indent).repeat(depth) : ``;
  return (
    padding
    + (node.type === TestNodeTypes.COMMENT ? `<!--${node.text}-->` : node.text)
  );
}
