import type { Emits, Props } from "./NH1.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NH1Ce from "./NH1.ce.vue";

export class NH1 extends defineCustomElement(NH1Ce) {}

export const NH1Util = {
  style: getStyle(NH1Ce),
  getHtmlHast: (props: Props) => renderToHastSync(h(NH1Ce, props)),
};

export type NH1Type = {
  Emit: Emits;
  Props: Props;
};
