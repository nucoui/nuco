import type { Emits, Props } from "./NUl.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NUlCe from "./NUl.ce.vue";

export class NUl extends defineCustomElement(NUlCe) {}

export const NUlUtil = {
  style: getStyle(NUlCe),
  getHtmlHast: (props: Props) => renderToHastSync(h(NUlCe, props)),
};

export type NUlType = {
  Emit: Emits;
  Props: Props;
};
