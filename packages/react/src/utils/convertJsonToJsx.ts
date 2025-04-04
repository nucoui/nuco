import type { Comment as HastComment, Element as HastElement, Text as HastText } from "hast";
import { Children, Fragment, type JSX, type ReactNode } from "react";
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

const convertPropertiesToReactProps = (properties: Record<string, any> | undefined): Record<string, any> => {
  if (!properties) {
    return {};
  }

  const {
    style,
    class: className,
    tabindex: tabIndex,
    onKeydown: onKeyDown,
    ...rest
  } = properties;
  const styleObject = typeof style === "string" ? parseStyleString(style) : undefined;

  return {
    ...rest,
    style: styleObject,
    className,
    tabIndex,
    onKeyDown,
  };
};

/**
 * hastノードをReactのJSXに変換する関数
 * @param hastNode - hastノード
 * @param slotChildren - ReactNodeとしてのスロットの子要素
 * @returns JSX.Element[]
 */
function convertJsonToJsx(hastNode: HastElement | HastText | HastComment | null, slotChildren?: ReactNode): JSX.Element | null {
  if (!hastNode) {
    return null;
  }

  if (hastNode.type === "text") {
    return jsx(Fragment, { children: hastNode.value });
  }

  if (hastNode.type === "comment") {
    return null;
  }

  if (hastNode.type === "element") {
    const { tagName, properties, children } = hastNode;

    // `nuco`タグを除外し、子要素を再帰的に処理
    if (tagName === "nuco") {
      if (children && children.length > 0) {
        return jsx(Fragment, {
          children: children
            .map((child, index) => {
              const jsxChild = convertJsonToJsx(child, slotChildren);
              if (jsxChild) {
                return jsx(jsxChild.type, { ...jsxChild.props }, index);
              }
              return null;
            })
            .filter(child => child !== null),
        });
      }
      return null;
    }

    let jsxChildren: JSX.Element[] | ReactNode | null = null;

    if (children && children.length > 0) {
      jsxChildren = children
        .map((child, index) => {
          const jsxChild = convertJsonToJsx(child, slotChildren);
          if (jsxChild) {
            return jsx(jsxChild.type, { ...jsxChild.props }, index);
          }
          return null;
        })
        .filter(child => child !== null) as JSX.Element[];
    }

    // slot要素の場合、slotChildrenを設定
    if (tagName === "slot") {
      if (properties?.name && slotChildren) {
        const namedSlotChildren = Children.toArray(slotChildren).filter(
          (child: any) => child.props?.slot === properties.name,
        );

        if (namedSlotChildren.length > 0) {
          jsxChildren = namedSlotChildren;
        }
        else if (children.length > 0) {
          jsxChildren = children.map((child, index) => {
            const jsxChild = convertJsonToJsx(child, slotChildren);
            if (jsxChild) {
              return jsx(jsxChild.type, { ...jsxChild.props }, index);
            }
            return null;
          });
        }
      }
      else if (slotChildren) {
        const unnamedSlotChildren = Children.toArray(slotChildren).filter(
          (child: any) => !child.props?.slot,
        );
        if (unnamedSlotChildren.length > 0) {
          jsxChildren = unnamedSlotChildren;
        }
        else if (children.length > 0) {
          jsxChildren = children.map((child, index) => {
            const jsxChild = convertJsonToJsx(child, slotChildren);
            if (jsxChild) {
              return jsx(jsxChild.type, { ...jsxChild.props }, index);
            }
            return null;
          });
        }
      }
    }

    const props = convertPropertiesToReactProps(properties);

    return jsx(tagName as any, {
      ...props,
      children: jsxChildren,
    });
  }

  return null;
}

export { convertJsonToJsx };
