import type { Emits, Props } from "./NAnchor.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NAnchorCe from "./NAnchor.ce.vue";

class NAnchor extends defineCustomElement(NAnchorCe) {}

const NAnchorUtil = {
  style: getStyle(NAnchorCe),
  getHtmlHast: (props: Props) => renderToHastSync(h(NAnchorCe, props)),
};

type NAnchorType = {
  Emit: Emits;
  Props: Props;
};

export {
  NAnchor,
  NAnchorUtil,
};

export type { NAnchorType };
