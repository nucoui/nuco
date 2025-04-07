import type { Props } from "@/types/Props";
import type { ElementsName } from "@nuco/core/elements";
import type { Comment as HastComment, Element as HastElement, Text as HastText } from "hast";
import { convertJsonToJsx } from "@/utils/convertJsonToJsx";
import { splitPropsAttr } from "@/utils/splitPropsAttr";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

type ServerWrapperProps<RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string> = {
  elementName: ElementsName;
  getNElementHtml: (props: ElementProps) => HastElement | HastText | HastComment | null;
  style: string;
  props: Props<RefType, ElementProps, ElementEmits>;
};

export const NucoServerWrapper = <RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string>({
  elementName,
  getNElementHtml,
  style,
  props,
}: ServerWrapperProps<RefType, ElementProps, ElementEmits>) => {
  const { props: spitedProps } = splitPropsAttr(props);
  const hast = getNElementHtml(spitedProps);
  const node = convertJsonToJsx(hast, props.children);

  Object.keys(spitedProps).forEach((key) => {
    if (key.startsWith("on")) {
      delete spitedProps[key];
    }
  });

  return _jsxs(elementName as any, {
    ...spitedProps,
    children: [
      _jsx("style", { children: style }),
      node,
    ],
  });
};
