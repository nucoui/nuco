import type { Emits, Props } from "./NDivider.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NDividerCe from "./NDivider.ce.vue";

export class NDivider extends defineCustomElement(NDividerCe) {}

export const NDividerUtil = {
  style: getStyle(NDividerCe),
  getHtmlHast: (props: Props) => renderToHastSync(h(NDividerCe, props)),
};

export type NDividerType = {
  Emit: Emits;
  Props: Props;
};
