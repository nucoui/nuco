import type { ReactElement, ReactNode } from "react";
import { Fragment, jsx } from "react/jsx-runtime";

/**
 * HAST nodeを変換するヘルパー関数
 * @param hastNode - 変換するHASTノード
 * @param children - 子要素（slotに渡す要素など）
 * @param key - Reactのキー
 * @param isInsideTemplate - template要素内かどうか（slot処理の制御用）
 * @returns 変換されたReactのJSX要素
 */
const convertHastNode = (hastNode: any, children?: ReactNode, key?: string, isInsideTemplate: boolean = false): ReactNode => {
  // テキストノードの場合はそのまま返す
  if (hastNode.type === "text") {
    return hastNode.value;
  }

  // element型以外の場合はdivとして処理
  if (hastNode.type !== "element") {
    return jsx("div", {}, key);
  }

  // HASTノードの属性をReactのpropsに変換
  const props: Record<string, any> = {};
  if (hastNode.properties) {
    Object.entries(hastNode.properties).forEach(([propName, propValue]) => {
      if (propName === "class") {
        props.className = propValue;
      }
      else {
        props[propName] = propValue;
      }
    });
  }

  let nodeChildren;

  // slotタグの特別処理
  if (hastNode.tagName === "slot") {
    const slotName = hastNode.properties?.name as string | undefined;

    // template要素内のslotの場合のみchildren配置を行う
    if (isInsideTemplate && children) {
      if (slotName) {
        // 名前付きslotの場合、対応する名前を持つ子要素を探す
        if (Array.isArray(children)) {
          const matchedChildren = children.filter((child: any) =>
            child?.props?.slot === slotName,
          );

          if (matchedChildren.length > 0) {
            nodeChildren = matchedChildren;
          }
        }
        else if (children && typeof children === "object" && (children as any)?.props?.slot === slotName) {
          // 単一の子要素が一致する場合
          nodeChildren = children;
        }
      }
      else {
        // 名前なしslotの場合、name属性のない子要素を使用
        if (Array.isArray(children)) {
          const defaultChildren = children.filter((child: any) =>
            !child?.props?.slot || child?.props?.slot === "",
          );

          if (defaultChildren.length > 0) {
            nodeChildren = defaultChildren;
          }
        }
        else if (children && typeof children === "object" && (!(children as any)?.props?.slot || (children as any)?.props?.slot === "")) {
          // 単一の子要素で名前がない場合
          nodeChildren = children;
        }
        else if (typeof children === "string" || typeof children === "number") {
          // テキストノードの場合
          nodeChildren = children;
        }
      }
    }

    // slotの子要素がなければ、デフォルトのslotコンテンツを使用
    if (!nodeChildren) {
      nodeChildren = hastNode.children.length > 0
        ? hastNode.children.map((child: any, index: number) =>
          convertHastNode(child, undefined, `${key}-slot-${index}`, isInsideTemplate),
        )
        : undefined;
    }
  }
  else {
    // 通常の要素の子要素処理
    nodeChildren = hastNode.children.length > 0
      ? hastNode.children.map((child: any, index: number) =>
        convertHastNode(child, children, `${key}-child-${index}`, isInsideTemplate),
      )
      : undefined;
  }

  // styleタグの特別処理
  if (hastNode.tagName === "style") {
    // style要素のテキストコンテンツを取得
    let styleContent = "";
    if (hastNode.children && hastNode.children.length > 0) {
      styleContent = hastNode.children
        .filter((child: any) => child.type === "text")
        .map((child: any) => child.value)
        .join("");
    }

    // スタイルコンテンツを変換（id削除により無処理）
    const transformedStyle = styleContent;

    // 変換したスタイルを持つstyle要素を作成
    return jsx("style", {
      ...props,
      children: transformedStyle,
    }, key);
  }

  // ReactのJSX要素を作成
  return jsx(hastNode.tagName as any, {
    ...props,
    children: nodeChildren,
  }, key);
};

/**
 * HAST (Hypertext Abstract Syntax Tree) をReactのJSX要素に変換する関数
 * template要素とその中身、およびchildrenを兄弟要素として生成します
 * @param _tag - 生成するJSX要素のタグ名（現在は未使用だが将来のスタイルのスコープ用に予約）
 * @param hast - 変換するHASTノード
 * @param children - 子要素（template要素の兄弟要素として配置）
 * @param key - Reactのキー
 * @returns 変換されたReactのJSX要素（FragmentでtemplateFとchildrenをラップ）
 */
export const hastToJsx = (_tag: string, hast: any, children?: ReactNode, key?: string): ReactElement => {
  // hastがnullまたはundefinedの場合、空のtemplate要素とchildrenを返す
  if (!hast) {
    return jsx(Fragment, {
      children: [
        jsx("template", { 
          shadowrootmode: "open" 
        }, `${key}-template`),
        children
      ].filter(Boolean)
    }, key);
  }

  let templateElement: ReactElement;

  // hastがroot型の場合の処理
  if (hast.type === "root") {
    // root要素の子要素からtemplate要素を探す
    const hastTemplateElement = hast.children.find((child: any) =>
      child.type === "element" && child.tagName === "template",
    );

    if (hastTemplateElement) {
      // 既存のtemplate要素がある場合、その中身を使用
      const templateContent = hastTemplateElement.children.map((child: any, index: number) =>
        convertHastNode(child, children, `${key}-template-${index}`, true),
      );

      // template要素の属性を保持
      const templateProps: Record<string, any> = {};
      if (hastTemplateElement.properties) {
        Object.entries(hastTemplateElement.properties).forEach(([propName, propValue]) => {
          templateProps[propName] = propValue;
        });
      }

      templateElement = jsx("template", {
        ...templateProps,
        children: templateContent,
      }, `${key}-template`);
    }
    else {
      // template要素がない場合、すべての子要素をtemplate内に配置
      const templateChildren = hast.children.map((child: any, index: number) =>
        convertHastNode(child, children, `${key}-root-${index}`, true),
      );

      templateElement = jsx("template", {
        shadowrootmode: "open",
        children: templateChildren,
      }, `${key}-template`);
    }
  }
  else {
    // root型以外の場合、そのノードをtemplate内に配置
    const templateContent = convertHastNode(hast, children, `${key}-content`, true);

    templateElement = jsx("template", {
      shadowrootmode: "open",
      children: templateContent,
    }, `${key}-template`);
  }

  // template要素とchildrenを兄弟要素として返す
  return jsx(Fragment, {
    children: [
      templateElement,
      children
    ].filter(Boolean)
  }, key);
};
