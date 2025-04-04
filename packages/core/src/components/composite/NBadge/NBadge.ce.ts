import type { Emits, Props } from "./NBadge.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NBadgeCe from "./NBadge.ce.vue";

export class NBadge extends defineCustomElement(NBadgeCe) {}

export const NBadgeUtil = {
  style: getStyle(NBadgeCe),
  getHtmlHast: (props: Props) => renderToHastSync(h(NBadgeCe, props)),
};

export type NBadgeType = {
  Emit: Emits;
  Props: Props;
};
