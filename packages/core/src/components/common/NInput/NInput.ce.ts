import type { Emits, Props } from "./NInput.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NInputCe from "./NInput.ce.vue";

const style = (NInputCe as any).styles?.[0] || "" as string;

const getHtmlString = (props: Props) => {
  const node = h(NInputCe, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NInput extends defineCustomElement(NInputCe) {
  static formAssociated = true;
}

export const NInputUtil: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NInputType = {
  Emit: Emits;
  Props: Props;
};
