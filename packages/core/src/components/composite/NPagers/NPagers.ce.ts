import type { Emits, Props } from "./NPagers.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NPagersCe from "./NPagers.ce.vue";

export class NPagers extends defineCustomElement(NPagersCe) {}

export const NPagersUtil = {
  style: getStyle(NPagersCe),
  getHtmlHast: (props: Props) => renderToHastSync(h(NPagersCe, props)),
};

export type NPagersType = {
  Emit: Emits;
  Props: Props;
};
