import { defineCustomElement } from "vue";
import NukoButtonCe from "./NukoButton.ce.vue";

const DefinedNukoButtonCe = defineCustomElement(NukoButtonCe);

export class NukoButton extends DefinedNukoButtonCe {}

export type { Props as NukoButtonProps } from "./NukoButton.ce.vue";
export type { Emits as NukoButtonEmits } from "./NukoButton.ce.vue";
