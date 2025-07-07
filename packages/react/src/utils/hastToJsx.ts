import type { ReactElement, ReactNode } from "react";
import { Fragment, jsx } from "react/jsx-runtime";

/**
 * HAST (Hypertext Abstract Syntax Tree) をReactのJSX要素に変換する関数
 * @param tag - 生成するJSX要素のタグ名
 * @param id - 要素に付与するID
 * @param hast - 変換するHASTノード
 * @param children - 子要素（slotに渡す要素など）
 * @param key - Reactのキー
 * @returns 変換されたReactのJSX要素
 */
export const hastToJsx = (tag: string, id: string, hast: any, children?: ReactNode, key?: string): ReactElement => {
  // hastがnullまたはundefinedの場合、空の要素を返す
  if (!hast) {
    return jsx(tag as any, { id, children: [], suppressHydrationWarning: true }, key);
  }

  // hastがroot型の場合、子要素を処理
  if (hast.type === "root") {
    const rootChildren = hast.children.map((child: any, index: number) => {
      if (child.type === "text") {
        return child.value;
      }
      return hastToJsx(
        child.type === "element" ? child.tagName : "div",
        id,
        child,
        children,
        `${key}-root-${index}`,
      );
    });

    return jsx(Fragment, {
      children: rootChildren,
    }, key);
  }

  // テキストノードの場合はそのまま返す
  if (hast.type === "text") {
    return jsx(tag as any, {
      children: hast.value,
      id,
      suppressHydrationWarning: true,
    }, key);
  }

  // element型以外の場合はdivとして処理
  if (hast.type !== "element") {
    return jsx("div", { id, suppressHydrationWarning: true }, key);
  }

  // HASTノードの属性をReactのpropsに変換
  const props: Record<string, any> = {};
  if (hast.properties) {
    Object.entries(hast.properties).forEach(([propName, propValue]) => {
      if (propName === "class") {
        props.className = propValue;
      }
      else {
        props[propName] = propValue;
      }
    });
  }

  // 通常の要素の子要素処理
  const nodeChildren = hast.children.length > 0
    ? hast.children.map((child: any, index: number) => {
      if (child.type === "text") {
        return child.value;
      }
      return hastToJsx(child.tagName, id, child, children, `${key}-child-${index}`);
    })
    : undefined;

  // keyを追加
  const keyToUse = key !== undefined ? key : props.key;
  // keyをpropsから削除（必要に応じて）
  if ("key" in props) {
    delete props.key;
  }

  // template要素をそのままレンダリング（childrenは兄弟要素として配置）
  if (hast.tagName === "template") {
    const templateElement = jsx("template" as any, {
      ...props,
      children: nodeChildren,
      id,
      suppressHydrationWarning: true,
    }, keyToUse);

    // childrenがある場合は、templateと兄弟要素として配置
    if (children) {
      return jsx(Fragment, {
        children: [templateElement, children],
        suppressHydrationWarning: true,
      }, keyToUse);
    }

    return templateElement;
  }

  // styleタグの特別処理
  if (hast.tagName === "style") {
    // style要素のテキストコンテンツを取得
    let styleContent = "";
    if (hast.children && hast.children.length > 0) {
      styleContent = hast.children
        .filter((child: any) => child.type === "text")
        .map((child: any) => child.value)
        .join("");
    }

    // 変換したスタイルを持つstyle要素を作成
    return jsx("style", {
      ...props,
      children: styleContent,
      suppressHydrationWarning: true,
    }, keyToUse);
  }

  // ReactのJSX要素を作成
  return jsx(hast.tagName as any, {
    ...props,
    children: nodeChildren,
    suppressHydrationWarning: true,
  }, keyToUse);
};
