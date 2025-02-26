import type { Emits, Props } from "./NUl.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NUlCe from "./NUl.ce.vue";

const style = (NUlCe as any).styles?.[0] || "" as string;

const getHtmlString = (props: Props) => {
  const node = h(NUlCe, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NUl extends defineCustomElement(NUlCe) {}

export const NUlUtil: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NUlType = {
  Emit: Emits;
  Props: Props;
};
