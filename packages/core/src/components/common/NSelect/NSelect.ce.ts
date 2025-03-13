import type { Emits, Props } from "./NSelect.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NSelectCe from "./NSelect.ce.vue";

const style = (NSelectCe as any).styles?.[0] || "" as string;

const getHtmlString = (props: Props) => {
  const node = h(NSelectCe, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NSelect extends defineCustomElement(NSelectCe) {
  static formAssociated = true;
}

export const NSelectUtil: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NSelectType = {
  Emit: Emits;
  Props: Props;
};
