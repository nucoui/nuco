/* eslint-disable regexp/no-super-linear-backtracking */
/* eslint-disable no-cond-assign */
import type { JSX, ReactNode } from "react";
import { jsx } from "react/jsx-runtime";

interface JsonNode {
  tag: string;
  attr: { [key: string]: string };
  children: JsonNode[];
  text?: string; // textノードの場合にテキスト内容を格納する
}

function parseHtmlToObject(htmlString: string): JsonNode[] {
  const result: JsonNode[] = [];
  const stack: JsonNode[] = []; // ネストされた要素を処理するためのスタック
  let current: JsonNode | null = null;

  const tagRegex = /<(\/)?([a-z0-9]+)([^>]*)>([^<]*)/gi; // 開始タグ、終了タグ、属性、テキストをマッチ
  let match;

  while ((match = tagRegex.exec(htmlString)) !== null) {
    const isClosingTag = match[1];
    const tag = match[2];
    const attrStr = match[3];
    const text = match[4];

    if (isClosingTag) { // 終了タグ
      if (current && current.tag === tag) {
        stack.pop();
        current = stack[stack.length - 1] || null;
      }
    }
    else { // 開始タグ
      const attr: { [key: string]: string } = {};
      const attrRegex = /([a-z-]+)="([^"]*)"/g;
      let attrMatch;
      while ((attrMatch = attrRegex.exec(attrStr)) !== null) {
        const attrName = attrMatch[1];
        const attrValue = attrMatch[2];
        // class属性をclassNameに置き換え
        if (attrName === "class") {
          attr.className = attrValue;
        }
        else {
          attr[attrName] = attrValue;
        }
      }

      const newNode: JsonNode = { tag, attr, children: [] };
      if (current) {
        current.children.push(newNode);
        stack.push(newNode);
        current = newNode;
      }
      else {
        result.push(newNode);
        stack.push(newNode);
        current = newNode;
      }

      if (text) { // テキストノード
        const textNode: JsonNode = { tag: "text", attr: {}, children: [], text: text.trim() };
        current.children.push(textNode);
      }
    }
  }

  return result;
}

function convertJsonToJsx(jsonNodes: JsonNode[], slotChildren?: ReactNode): JSX.Element[] {
  return jsonNodes.map((node, index): JSX.Element => {
    if (node.tag === "text") {
      return jsx("span", { children: node.text }, index); // テキストノードをspanでラップして返します
    }
    else {
      let children: JSX.Element[] | ReactNode | null = node.children.length > 0 ? convertJsonToJsx(node.children, slotChildren) : null;

      // slot要素の場合、slotChildrenを設定
      if (node.tag === "slot" && slotChildren) {
        children = [slotChildren];
      }

      const { children: attrChildren, ...rest } = node.attr;
      return jsx(node.tag as any, { ...rest, children }, index);
    }
  });
}

export { convertJsonToJsx, parseHtmlToObject };
