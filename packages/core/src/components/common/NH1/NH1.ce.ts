import type { Emits, Props } from "./NH1.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NH1Ce from "./NH1.ce.vue";

const style = (NH1Ce as any).styles[0] as string;

const getHtmlString = (props: Props) => {
  const node = h(NH1Ce, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NH1 extends defineCustomElement(NH1Ce) {}

export const NH1Util: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NH1Type = {
  Emit: Emits;
  Props: Props;
};
