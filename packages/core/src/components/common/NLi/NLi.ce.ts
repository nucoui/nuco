import type { Emits, Props } from "./NLi.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NLiCe from "./NLi.ce.vue";

export class NLi extends defineCustomElement(NLiCe) {}

export const NLiUtil = {
  style: getStyle(NLiCe),
  getHtmlHast: (props: Props) => renderToHastSync(h(NLiCe, props)),
};

export type NLiType = {
  Emit: Emits;
  Props: Props;
};
