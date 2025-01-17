import { defineCustomElement } from "vue";
import NH4Ce from "./NH4.ce.vue";

const DefineNH4 = defineCustomElement(NH4Ce);

export class NH4 extends DefineNH4 {}

export type { Emits as NH4Emits } from "./NH4.ce.vue";
