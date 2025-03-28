import type { Emits, Props } from "./NCodeBlock.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NCodeBlockCe from "./NCodeBlock.ce.vue";

const style = (NCodeBlockCe as any).styles?.[0] ?? "" as string;

const getHtmlString = (props: Props) => {
  const node = h(NCodeBlockCe, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NCodeBlock extends defineCustomElement(NCodeBlockCe) {}

export const NCodeBlockUtil: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NCodeBlockType = {
  Emit: Emits;
  Props: Props;
};
