import type { Emits, Props } from "./NDivider.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NDividerCe from "./NDivider.ce.vue";

const style = (NDividerCe as any).styles?.[0] ?? "" as string;

const getHtmlString = (props: Props) => {
  const node = h(NDividerCe, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NDivider extends defineCustomElement(NDividerCe) {}

export const NDividerUtil: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NDividerType = {
  Emit: Emits;
  Props: Props;
};
