import type { Emits, Props } from "./NNavAccordion.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NNavAccordionCe from "./NNavAccordion.ce.vue";

const style = (NNavAccordionCe as any).styles?.[0] || "" as string;

const getHtmlString = (props: Props) => {
  const node = h(NNavAccordionCe, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NNavAccordion extends defineCustomElement(NNavAccordionCe) {}

export const NNavAccordionUtil: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NNavAccordionType = {
  Emit: Emits;
  Props: Props;
};
