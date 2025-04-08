import type { Emits, Props } from "./NPager.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NPagerCe from "./NPager.ce.vue";

export class NPager extends defineCustomElement(NPagerCe) {}

export const NPagerUtil = {
  style: getStyle(NPagerCe),
  getHtmlHast: (props: Props) => renderToHastSync(h(NPagerCe, props)),
};

export type NPagerType = {
  Emit: Emits;
  Props: Props;
};
