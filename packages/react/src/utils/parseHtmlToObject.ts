/* eslint-disable regexp/no-super-linear-backtracking */
/* eslint-disable no-cond-assign */

import type { JsonNode } from "@/types/JsonNode";

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

export { parseHtmlToObject };
