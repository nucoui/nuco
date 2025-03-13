import type { Emits, Props } from "./NOption.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NOptionCe from "./NOption.ce.vue";

const style = (NOptionCe as any).styles?.[0] ?? "" as string;

const getHtmlString = (props: Props) => {
  const node = h(NOptionCe, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

export class NOption extends defineCustomElement(NOptionCe) {}

export const NOptionUtil: {
  style: typeof style;
  getHtmlString: typeof getHtmlString;
} = {
  style,
  getHtmlString,
};

export type NOptionType = {
  Emit: Emits;
  Props: Props;
};
