import type { ComponentProps } from "../../types/ComponentProps";
import { defineCustomElement } from "vue";
import NukoInputCe from "./NukoInput.ce.vue";

const DefinedNukoInput = defineCustomElement(NukoInputCe) as unknown as typeof HTMLInputElement;

export type NukoInputProps = ComponentProps<typeof NukoInputCe>;

export class NukoInput extends DefinedNukoInput {
  static formAssociated = true;
}
