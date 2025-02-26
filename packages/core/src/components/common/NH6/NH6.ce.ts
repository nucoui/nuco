import type { Emits, Props } from "./NH6.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NH6Ce from "./NH6.ce.vue";

const style = (NH6Ce as any).styles?.[0] || "" as string;

const getHtmlString = (props: Props) => {
  const node = h(NH6Ce, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NH6 extends defineCustomElement(NH6Ce) {}

export const NH6Util: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NH6Type = {
  Emit: Emits;
  Props: Props;
};
