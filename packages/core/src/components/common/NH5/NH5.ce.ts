import { defineCustomElement } from "vue";
import NH5Ce from "./NH5.ce.vue";

const DefineNH5 = defineCustomElement(NH5Ce);

export class NH5 extends DefineNH5 {}

export type { Emits as NH5Emits } from "./NH5.ce.vue";
