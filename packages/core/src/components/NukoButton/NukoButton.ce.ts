import { defineCustomElement } from "vue";
import NukoButtonCe from "./NukoButton.ce.vue";

export const NukoButton = defineCustomElement(NukoButtonCe);

export type { Props as NukoButtonProps } from "./NukoButton.ce.vue";
export type { Emits as NukoButtonEmits } from "./NukoButton.ce.vue";
