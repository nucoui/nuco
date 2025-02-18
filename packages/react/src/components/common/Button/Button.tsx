import type { NButtonEmits, NButtonProps } from "@nuco/core";
import { Client } from "@/components/Client";
import { ButtonSSR } from "@/components/common/Button/ButtonSSR";
import { NucoWrapper, type Props } from "@/components/NucoWrapper";

type ElementType = HTMLButtonElement;

export const Button = async (props: Props<ElementType, NButtonProps, NButtonEmits>) => {
  return (
    <Client serverChildren={<ButtonSSR {...props} />}>
      <NucoWrapper<ElementType, NButtonProps, NButtonEmits> elementName="n-button" props={props} />
    </Client>
  );
};
