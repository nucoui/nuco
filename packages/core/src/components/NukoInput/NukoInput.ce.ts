import { defineCustomElement } from "vue";
import NukoInputCe from "./NukoInput.ce.vue";

const DefinedNukoInput = defineCustomElement(NukoInputCe) as unknown as typeof HTMLInputElement;

export class NukoInput extends DefinedNukoInput {
  static formAssociated = true;
}
