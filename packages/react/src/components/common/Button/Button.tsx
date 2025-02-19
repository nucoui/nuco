import type { Props } from "@/types/Props";
import type { NButtonEmits, NButtonProps } from "@nuco/core";
import { NucoWrapper } from "@/components/NucoWrapper";
import { getNButtonHtml } from "@nuco/core";

type ElementType = HTMLButtonElement;

export const Button = (props: Props<ElementType, NButtonProps, NButtonEmits>) => <NucoWrapper<ElementType, NButtonProps, NButtonEmits> elementName="n-button" getNElementHtml={getNButtonHtml} props={props} />;
