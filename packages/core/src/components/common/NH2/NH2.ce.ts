import { defineCustomElement } from "vue";
import NH2Ce from "./NH2.ce.vue";

const DefineNH2 = defineCustomElement(NH2Ce);

export class NH2 extends DefineNH2 {}

export type { Emits as NH2Emits } from "./NH2.ce.vue";
