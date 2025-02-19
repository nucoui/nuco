import type { Emits, Props } from "./NButton.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NButtonCe from "./NButton.ce.vue";

const style = (NButtonCe as any).styles[0] as string;

const getHtmlString = (props: Props) => {
  const node = h(NButtonCe, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NButton extends defineCustomElement(NButtonCe) {}

export const NButtonUtil: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NButtonType = {
  Emit: Emits;
  Props: Props;
};
