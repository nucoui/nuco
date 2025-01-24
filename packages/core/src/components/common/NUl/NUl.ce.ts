import { defineCustomElement } from "vue";
import NUlCe from "./NUl.ce.vue";

const DefineNUl = defineCustomElement(NUlCe);

export class NUl extends DefineNUl {}

export type { Props as NUlProps } from "./NUl.ce.vue";
export type { Emits as NUlEmits } from "./NUl.ce.vue";
