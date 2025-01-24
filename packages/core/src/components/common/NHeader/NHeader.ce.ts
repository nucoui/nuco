import { defineCustomElement } from "vue";
import NHeaderCe from "./NHeader.ce.vue";

const DefineNHeader = defineCustomElement(NHeaderCe);

export class NHeader extends DefineNHeader {}

export type { Props as NHeaderProps } from "./NHeader.ce.vue";
export type { Emits as NHeaderEmits } from "./NHeader.ce.vue";
