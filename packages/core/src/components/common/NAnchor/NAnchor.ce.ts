import type { Emits, Props } from "./NAnchor.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NAnchorCe from "./NAnchor.ce.vue";

const style = (NAnchorCe as any).styles[0] as string;

const getHtmlString = (props: Props) => {
  const node = h(NAnchorCe, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NAnchor extends defineCustomElement(NAnchorCe) {}

export const NAnchorUtil: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NAnchorType = {
  Emit: Emits;
  Props: Props;
};
