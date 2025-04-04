import type { Emits, Props } from "./NCodeBlock.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NCodeBlockCe from "./NCodeBlock.ce.vue";

export class NCodeBlock extends defineCustomElement(NCodeBlockCe) {}

export const NCodeBlockUtil = {
  style: getStyle(NCodeBlockCe),
  getHtmlHast: (props: Props) => renderToHastSync(h(NCodeBlockCe, props)),
};

export type NCodeBlockType = {
  Emit: Emits;
  Props: Props;
};
