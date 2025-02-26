import type { Emits, Props } from "./NH5.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NH5Ce from "./NH5.ce.vue";

const style = (NH5Ce as any).styles?.[0] || "" as string;

const getHtmlString = (props: Props) => {
  const node = h(NH5Ce, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NH5 extends defineCustomElement(NH5Ce) {}

export const NH5Util: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NH5Type = {
  Emit: Emits;
  Props: Props;
};
