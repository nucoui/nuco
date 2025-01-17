import { defineCustomElement } from "vue";
import NH6Ce from "./NH6.ce.vue";

const DefineNH6 = defineCustomElement(NH6Ce);

export class NH6 extends DefineNH6 {}

export type { Emits as NH6Emits } from "./NH6.ce.vue";
