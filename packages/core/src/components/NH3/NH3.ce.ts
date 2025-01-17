import { defineCustomElement } from "vue";
import NH3Ce from "./NH3.ce.vue";

const DefineNH3 = defineCustomElement(NH3Ce);

export class NH3 extends DefineNH3 {}

export type { Emits as NH3Emits } from "./NH3.ce.vue";
