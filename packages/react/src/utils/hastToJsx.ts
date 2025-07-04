import type { ReactElement, ReactNode } from "react";
import { Fragment, jsx } from "react/jsx-runtime";

/**
 * スタイル内のセレクタにID属性を追加する関数
 * @param styleContent - 変換するCSSコンテンツ
 * @param id - 追加するID
 * @returns 変換後のCSSコンテンツ
 */
/**
 * Add ID attribute to selectors in style content, and convert ::slotted pseudo to slot > selector for tora-container.
 * @param styleContent - CSS content to transform
 * @param id - ID to add
 * @returns Transformed CSS content
 */
const transformStyleContent = (styleContent: string, id: string): string => {
  if (!styleContent)
    return styleContent;

  // 1. ::slotted(selector) → slot > selector
  let replaced = styleContent.replace(/::slotted\(([^)]+)\)/g, (_m, slottedSel) => {
    return `slot > ${slottedSel.trim()}`;
  });

  // 2. 各セレクタの先頭にIDを付与
  replaced = replaced.replace(/([^{}]+)(\{[^{}]*\})/g, (match, selector, rules) => {
    // セレクタをカンマで分割して各セレクタにID属性を追加
    const transformedSelector = selector
      .split(",")
      .map((s: string) => {
        // 既に[id=]が先頭にある場合はそのまま
        const trimmed = s.trim();
        if (trimmed.startsWith(`[id="${id}"]`))
          return trimmed;
        return `[id="${id}"] ${trimmed}`;
      })
      .join(", ");
    return `${transformedSelector} ${rules}`;
  });

  return replaced;
};

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
    return jsx(tag as any, { id, children: [] }, key);
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
    }, key);
  }

  // element型以外の場合はdivとして処理
  if (hast.type !== "element") {
    return jsx("div", { id }, key);
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

  let nodeChildren;

  // slotタグの特別処理
  if (hast.tagName === "slot") {
    const slotName = hast.properties?.name as string | undefined;

    if (slotName && children) {
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
    else if (children) {
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

    // slotの子要素がなければ、デフォルトのslotコンテンツを使用
    if (!nodeChildren) {
      nodeChildren = hast.children.length > 0
        ? hast.children.map((child: any, index: number) => {
          if (child.type === "text") {
            return child.value;
          }
          return hastToJsx(child.tagName, id, child, children, `${key}-child-${index}`);
        })
        : undefined;
    }
  }
  else {
    // 通常の要素の子要素処理
    nodeChildren = hast.children.length > 0
      ? hast.children.map((child: any, index: number) => {
        if (child.type === "text") {
          return child.value;
        }
        return hastToJsx(child.tagName, id, child, children, `${key}-child-${index}`);
      })
      : undefined;
  }

  // keyを追加
  const keyToUse = key !== undefined ? key : props.key;
  // keyをpropsから削除（必要に応じて）
  if ("key" in props) {
    delete props.key;
  }

  // template要素をcontainerとして処理
  if (hast.tagName === "template") {
    return jsx("tora-container" as any, {
      children: nodeChildren,
      id,
    }, keyToUse);
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

    // スタイルコンテンツを変換して、container要素内の要素に適用されるようにする
    const transformedStyle = transformStyleContent(styleContent, id);

    // 変換したスタイルを持つstyle要素を作成
    return jsx("style", {
      ...props,
      children: transformedStyle,
    }, keyToUse);
  }

  // ReactのJSX要素を作成
  return jsx(hast.tagName as any, {
    ...props,
    children: nodeChildren,
  }, keyToUse);
};

/*

[id=":R355:"] .n-breadcrumb {
  display: flex;
  gap: var(--n-2);
  align-items: center;
}
.n-breadcrumb [id=":R355:"] slot > n-li {
  display: flex;
  align-items: baseline;
  font-size: var(--n-3);
  color: var(--cs-text-secondary);
}
.n-breadcrumb [id=":R355:"] slot > n-li::before {
  display: inline-block;
  margin-right: var(--n-2);
  content: ">";
}
.n-breadcrumb [id=":R355:"] slot > n-li:first-child::before {
  content: none;
}
.n-breadcrumb [id=":R355:"] slot > n-li:last-child {
  color: var(--cs-text-primary);
}
.n-breadcrumb [id=":R355:"] slot > n-li:last-child::before {
  font-weight: normal;
  color: var(--cs-text-secondary);
}

*/
