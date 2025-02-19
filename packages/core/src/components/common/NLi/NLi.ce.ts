import type { Emits, Props } from "./NLi.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NLiCe from "./NLi.ce.vue";

const style = (NLiCe as any).styles[0] as string;

const getHtmlString = (props: Props) => {
  const node = h(NLiCe, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NLi extends defineCustomElement(NLiCe) {}

export const NLiUtil: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NLiType = {
  Emit: Emits;
  Props: Props;
};
