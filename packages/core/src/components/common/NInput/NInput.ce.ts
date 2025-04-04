import type { Emits, Props } from "./NInput.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NInputCe from "./NInput.ce.vue";

export class NInput extends defineCustomElement(NInputCe) {
  static formAssociated = true;
}

export const NInputUtil = {
  style: getStyle(NInputCe),
  getHtmlHast: (props: Props) => renderToHastSync(h(NInputCe, props)),
};

export type NInputType = {
  Emit: Emits;
  Props: Props;
};
