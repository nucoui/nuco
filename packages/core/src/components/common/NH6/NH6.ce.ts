import type { Emits, Props } from "./NH6.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NH6Ce from "./NH6.ce.vue";

export class NH6 extends defineCustomElement(NH6Ce) {}

export const NH6Util = {
  style: getStyle(NH6Ce),
  getHtmlHast: (props: Props) => renderToHastSync(h(NH6Ce, props)),
};

export type NH6Type = {
  Emit: Emits;
  Props: Props;
};
