import type { Emits, Props } from "./NH2.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NH2Ce from "./NH2.ce.vue";

const style = (NH2Ce as any).styles[0] as string;

const getHtmlString = (props: Props) => {
  const node = h(NH2Ce, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NH2 extends defineCustomElement(NH2Ce) {}

export const NH2Util: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NH2Type = {
  Emit: Emits;
  Props: Props;
};
