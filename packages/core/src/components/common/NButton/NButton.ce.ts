import type { Emits, Props } from "./NButton.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NButtonCe from "./NButton.ce.vue";

class NButton extends defineCustomElement(NButtonCe) {}

const NButtonUtil = {
  style: getStyle(NButtonCe),
  getHtmlHast: (props: Props) => renderToHastSync(h(NButtonCe, props)),
};

export {
  NButton,
  NButtonUtil,
};

export type NButtonType = {
  Emit: Emits;
  Props: Props;
};
