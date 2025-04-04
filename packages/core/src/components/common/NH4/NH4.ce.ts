import type { Emits, Props } from "./NH4.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NH4Ce from "./NH4.ce.vue";

export class NH4 extends defineCustomElement(NH4Ce) {}

export const NH4Util = {
  style: getStyle(NH4Ce),
  getHtmlHast: (props: Props) => renderToHastSync(h(NH4Ce, props)),
};

export type NH4Type = {
  Emit: Emits;
  Props: Props;
};
