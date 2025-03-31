import type { Props } from "@/types/Props";
import type { NElementNames } from "@nuco/core";
import { convertJsonToJsx } from "@/utils/convertJsonToJsx";
import { parseHtmlToObject } from "@/utils/parseHtmlToObject";
import { splitPropsAttr } from "@/utils/splitPropsAttr";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

type ServerWrapperProps<RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string> = {
  elementName: NElementNames;
  getNElementHtml: (props: ElementProps) => string;
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
  const htmlString = getNElementHtml(spitedProps);
  const htmlObj = parseHtmlToObject(htmlString);
  const node = convertJsonToJsx(htmlObj, props.children);

  return _jsxs(elementName as any, {
    ...spitedProps,
    children: [
      _jsx("style", { children: style }),
      node,
    ],
  });
};
