import type { Emits, Props } from "./NH4.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NH4Ce from "./NH4.ce.vue";

const style = (NH4Ce as any).styles[0] as string;

const getHtmlString = (props: Props) => {
  const node = h(NH4Ce, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NH4 extends defineCustomElement(NH4Ce) {}

export const NH4Util: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NH4Type = {
  Emit: Emits;
  Props: Props;
};
