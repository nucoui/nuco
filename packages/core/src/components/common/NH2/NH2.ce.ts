import type { Emits, Props } from "./NH2.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NH2Ce from "./NH2.ce.vue";

export class NH2 extends defineCustomElement(NH2Ce) {}

export const NH2Util = {
  style: getStyle(NH2Ce),
  getHtmlHast: (props: Props) => renderToHastSync(h(NH2Ce, props)),
};

export type NH2Type = {
  Emit: Emits;
  Props: Props;
};
