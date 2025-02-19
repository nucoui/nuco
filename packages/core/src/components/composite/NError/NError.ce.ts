import type { Emits, Props } from "./NError.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NErrorCe from "./NError.ce.vue";

const style = (NErrorCe as any).styles[0] as string;

const getHtmlString = (props: Props) => {
  const node = h(NErrorCe, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NError extends defineCustomElement(NErrorCe) {}

export const NErrorUtil: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NErrorType = {
  Emit: Emits;
  Props: Props;
};
