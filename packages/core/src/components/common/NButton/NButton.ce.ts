import type { Emits as NButtonEmits, Props as NButtonProps } from "./NButton.ce.vue";
import { renderToStringSync } from "@/utils/renderToStringSync";
import { defineCustomElement, h } from "vue";
import NButtonCe from "./NButton.ce.vue";

const styleNButton = (NButtonCe as any).styles[0] as string;

const getNButtonHtml = (props: NButtonProps) => {
  const node = h(NButtonCe, props);
  const renderedNode = renderToStringSync(node);

  return renderedNode;
};

class NButton extends defineCustomElement(NButtonCe) {}

export {
  getNButtonHtml,
  NButton,
  styleNButton,
};

export type { NButtonEmits, NButtonProps };
