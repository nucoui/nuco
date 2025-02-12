import { defineCustomElement } from "vue";
import NButtonCe from "./NButton.ce.vue";

export const styleNButton = (NButtonCe as any).styles[0] as string;

const DefinedNButtonCe = defineCustomElement(NButtonCe);

export class NButton extends DefinedNButtonCe {}

export type { Props as NButtonProps } from "./NButton.ce.vue";
export type { Emits as NButtonEmits } from "./NButton.ce.vue";
