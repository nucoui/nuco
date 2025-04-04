import type { Emits, Props } from "./NH3.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NH3Ce from "./NH3.ce.vue";

export class NH3 extends defineCustomElement(NH3Ce) {}

export const NH3Util = {
  style: getStyle(NH3Ce),
  getHtmlHast: (props: Props) => renderToHastSync(h(NH3Ce, props)),
};

export type NH3Type = {
  Emit: Emits;
  Props: Props;
};
