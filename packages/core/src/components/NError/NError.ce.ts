import { defineCustomElement } from "vue";
import NErrorCe from "./NError.ce.vue";

const DefineNError = defineCustomElement(NErrorCe);

export class NError extends DefineNError {}

export type { Props as NErrorProps } from "./NError.ce.vue";
export type { Emits as NErrorEmits } from "./NError.ce.vue";
