import type { Emits, Props } from "./NBreadcrumb.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NBreadcrumbCe from "./NBreadcrumb.ce.vue";

const style = (NBreadcrumbCe as any).styles?.[0] || "" as string;

const getHtmlString = (props: Props) => {
  const node = h(NBreadcrumbCe, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NBreadcrumb extends defineCustomElement(NBreadcrumbCe) {}

export const NBreadcrumbUtil: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NBreadcrumbType = {
  Emit: Emits;
  Props: Props;
};
