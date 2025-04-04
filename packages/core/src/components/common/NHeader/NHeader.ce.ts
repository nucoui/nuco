import type { Emits, Props } from "./NHeader.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NHeaderCe from "./NHeader.ce.vue";

export class NHeader extends defineCustomElement(NHeaderCe) {}

export const NHeaderUtil = {
  style: getStyle(NHeaderCe),
  getHtmlHast: (props: Props) => renderToHastSync(h(NHeaderCe, props)),
};

export type NHeaderType = {
  Emit: Emits;
  Props: Props;
};
