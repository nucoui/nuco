import type { Emits, Props } from "./NSelect.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NSelectCe from "./NSelect.ce.vue";

export class NSelect extends defineCustomElement(NSelectCe) {
  static formAssociated = true;
}

export const NSelectUtil = {
  style: getStyle(NSelectCe),
  getHtmlHast: (props: Props) => renderToHastSync(h(NSelectCe, props)),
};

export type NSelectType = {
  Emit: Emits;
  Props: Props;
};
