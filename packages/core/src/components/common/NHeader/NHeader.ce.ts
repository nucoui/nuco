import type { Emits, Props } from "./NHeader.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NHeaderCe from "./NHeader.ce.vue";

const style = (NHeaderCe as any).styles[0] as string;

const getHtmlString = (props: Props) => {
  const node = h(NHeaderCe, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NHeader extends defineCustomElement(NHeaderCe) {}

export const NHeaderUtil: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NHeaderType = {
  Emit: Emits;
  Props: Props;
};
