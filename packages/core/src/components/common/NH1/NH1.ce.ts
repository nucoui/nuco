import { defineCustomElement } from "vue";
import NH1Ce from "./NH1.ce.vue";

const DefineNH1 = defineCustomElement(NH1Ce);

export class NH1 extends DefineNH1 {}

export type { Emits as NH1Emits } from "./NH1.ce.vue";
