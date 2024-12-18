import { defineCustomElement } from "vue";
import NLiCe from "./NLi.ce.vue";

const DefineNLi = defineCustomElement(NLiCe);

export class NLi extends DefineNLi {}

export type { Props as NLiProps } from "./NLi.ce.vue";
export type { Emits as NLiEmits } from "./NLi.ce.vue";
