import type { Emits, Props } from "./NError.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NErrorCe from "./NError.ce.vue";

export class NError extends defineCustomElement(NErrorCe) {}

export const NErrorUtil = {
  style: getStyle(NErrorCe),
  getHtmlHast: (props: Props) => renderToHastSync(h(NErrorCe, props)),
};

export type NErrorType = {
  Emit: Emits;
  Props: Props;
};
