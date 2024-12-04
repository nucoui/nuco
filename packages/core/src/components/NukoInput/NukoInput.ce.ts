import { defineCustomElement } from "vue";
import NukoInputCe from "./NukoInput.ce.vue";

const DefinedNukoInput = defineCustomElement(NukoInputCe);

export class NukoInput extends DefinedNukoInput {
  static formAssociated = true;
}

export type { Props as NukoInputProps } from "./NukoInput.ce.vue";
export type { Emits as NukoInputEmits } from "./NukoInput.ce.vue";
