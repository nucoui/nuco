import { defineCustomElement } from "vue";
import NukoErrorCe from "./NukoError.ce.vue";

const DefineNukoError = defineCustomElement(NukoErrorCe);

export class NukoError extends DefineNukoError {}

export type { Props as NukoErrorProps } from "./NukoError.ce.vue";
export type { Emits as NukoErrorEmits } from "./NukoError.ce.vue";
