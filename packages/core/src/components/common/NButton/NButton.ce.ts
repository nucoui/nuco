import type { Emits as NButtonEmits, Props as NButtonProps } from "./NButton.ce.vue";
import { defineCustomElement, h } from "vue";
import { renderToString } from "vue/server-renderer";
import NButtonCe from "./NButton.ce.vue";

const styleNButton = (NButtonCe as any).styles[0] as string;

const getNButtonHtml = async (props: NButtonProps) => {
  const node = h(NButtonCe, props);
  const renderedNode = await renderToString(node);

  return renderedNode;
};

class NButton extends defineCustomElement(NButtonCe) {}

export {
  getNButtonHtml,
  NButton,
  styleNButton,
};

export type { NButtonEmits, NButtonProps };
