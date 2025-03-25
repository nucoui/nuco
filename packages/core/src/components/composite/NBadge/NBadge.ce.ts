import type { Emits, Props } from "./NBadge.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NBadgeCe from "./NBadge.ce.vue";

const style = (NBadgeCe as any).styles?.[0] ?? "" as string;

const getHtmlString = (props: Props) => {
  const node = h(NBadgeCe, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NBadge extends defineCustomElement(NBadgeCe) {}

export const NBadgeUtil: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NBadgeType = {
  Emit: Emits;
  Props: Props;
};
