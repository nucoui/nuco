import type { Emits, Props } from "./NNavAccordion.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NNavAccordionCe from "./NNavAccordion.ce.vue";

export class NNavAccordion extends defineCustomElement(NNavAccordionCe) {}

export const NNavAccordionUtil = {
  style: getStyle(NNavAccordionCe),
  getHtmlHast: (props: Props) => renderToHastSync(h(NNavAccordionCe, props)),
};

export type NNavAccordionType = {
  Emit: Emits;
  Props: Props;
};
