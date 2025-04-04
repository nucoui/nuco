import type { Emits, Props } from "./NH5.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NH5Ce from "./NH5.ce.vue";

export class NH5 extends defineCustomElement(NH5Ce) {}

export const NH5Util = {
  style: getStyle(NH5Ce),
  getHtmlHast: (props: Props) => renderToHastSync(h(NH5Ce, props)),
};

export type NH5Type = {
  Emit: Emits;
  Props: Props;
};
