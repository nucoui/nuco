import type { Emits, Props } from "./NOption.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NOptionCe from "./NOption.ce.vue";

export class NOption extends defineCustomElement(NOptionCe) {}

export const NOptionUtil = {
  style: getStyle(NOptionCe),
  getHtmlHast: (props: Props) => renderToHastSync(h(NOptionCe, props)),
};

export type NOptionType = {
  Emit: Emits;
  Props: Props;
};
