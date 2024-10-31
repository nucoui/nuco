import { defineCustomElement } from "vue";
import NukoInputCe from "./NukoInput.ce.vue";

const DefinedNukoInput = defineCustomElement(NukoInputCe) as typeof HTMLElement;

export class NukoInput extends DefinedNukoInput {
  static formAssociated = true;
}
