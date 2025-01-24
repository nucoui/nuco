import { defineCustomElement } from "vue";
import NInputCe from "./NInput.ce.vue";

const DefinedNInput = defineCustomElement(NInputCe);

export class NInput extends DefinedNInput {
  static formAssociated = true;
}

export type { Props as NInputProps } from "./NInput.ce.vue";
export type { Emits as NInputEmits } from "./NInput.ce.vue";
