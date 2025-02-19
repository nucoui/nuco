import type { Emits, Props } from "./NH3.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NH3Ce from "./NH3.ce.vue";

const style = (NH3Ce as any).styles[0] as string;

const getHtmlString = (props: Props) => {
  const node = h(NH3Ce, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NH3 extends defineCustomElement(NH3Ce) {}

export const NH3Util: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NH3Type = {
  Emit: Emits;
  Props: Props;
};
