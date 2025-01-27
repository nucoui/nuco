import { defineCustomElement } from "vue";
import NBreadcrumbCe from "./NBreadcrumb.ce.vue";

const DefineNBreadcrumb = defineCustomElement(NBreadcrumbCe);

export class NBreadcrumb extends DefineNBreadcrumb {}

export type { Props as NBreadcrumbProps } from "./NBreadcrumb.ce.vue";
