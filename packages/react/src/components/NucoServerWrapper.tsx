import type { Props } from "@/types/Props";
import type { ElementNames } from "@nuco/core";
import { convertJsonToJsx, parseHtmlToObject } from "@/utils/parseHtmlToObject";
import { splitAttr } from "@/utils/splitAttr";
import { styleNButton } from "@nuco/core";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

type ServerWrapperProps<RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string> = {
  elementName: ElementNames;
  getNElementHtml: (props: ElementProps) => string;
  props: Props<RefType, ElementProps, ElementEmits>;
};

export const NucoServerWrapper = <RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string>({ elementName, getNElementHtml, props }: ServerWrapperProps<RefType, ElementProps, ElementEmits>) => {
  const { props: spitedProps } = splitAttr(props);
  const htmlString = getNElementHtml(props);
  const htmlObj = parseHtmlToObject(htmlString);
  const node = convertJsonToJsx(htmlObj, props.children);

  return _jsxs(elementName as any, {
    ...spitedProps,
    children: [
      _jsx("style", { children: styleNButton }),
      node,
    ],
  });
};
