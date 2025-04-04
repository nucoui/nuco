import type { Emits, Props } from "./NBreadcrumb.ce.vue";
import { getStyle } from "@/utils/getStyle";
import { renderToHastSync } from "@/utils/renderToHastSync";
import { defineCustomElement, h } from "vue";
import NBreadcrumbCe from "./NBreadcrumb.ce.vue";

export class NBreadcrumb extends defineCustomElement(NBreadcrumbCe) {}

export const NBreadcrumbUtil = {
  style: getStyle(NBreadcrumbCe),
  getHtmlHast: (props: Props) => renderToHastSync(h(NBreadcrumbCe, props)),
};

export type NBreadcrumbType = {
  Emit: Emits;
  Props: Props;
};
