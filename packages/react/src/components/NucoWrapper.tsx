import type { Props } from "@/types/Props";
import type { ElementNames, NButtonEmits, NButtonProps } from "@nuco/core";
import { Client } from "@/components/Client";
import { NucoClientWrapper } from "@/components/NucoClientWrapper";
import { NucoServerWrapper } from "@/components/NucoServerWrapper";

type WrapperProps<RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string> = {
  elementName: ElementNames;
  getNElementHtml: (props: ElementProps) => string;
  props: Props<RefType, ElementProps, ElementEmits>;
};

export const NucoWrapper = <RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string>({ elementName, getNElementHtml, props }: WrapperProps<RefType, ElementProps, ElementEmits>) => {
  return (
    <Client serverChildren={<NucoServerWrapper elementName={elementName} getNElementHtml={getNElementHtml} props={props} />}>
      <NucoClientWrapper<RefType, NButtonProps, NButtonEmits> elementName={elementName} props={props} />
    </Client>
  );
};
