import type { Props } from "@/types/Props";
import type { ElementNames } from "@nuco/core";
import { Client } from "@/components/wrapper/Client";
import { NucoClientWrapper } from "@/components/wrapper/NucoClientWrapper";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";

type WrapperProps<RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string> = {
  elementName: ElementNames;
  getNElementHtml: (props: ElementProps) => string;
  style: string;
  props: Props<RefType, ElementProps, ElementEmits>;
};

export const NucoWrapper = <RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string>({
  elementName,
  getNElementHtml,
  style,
  props,
}: WrapperProps<RefType, ElementProps, ElementEmits>) => {
  return (
    <Client
      serverChildren={(
        <NucoServerWrapper<RefType, ElementProps, ElementEmits>
          elementName={elementName}
          getNElementHtml={getNElementHtml}
          style={style}
          props={props}
        />
      )}
    >
      <NucoClientWrapper<RefType, ElementProps, ElementEmits>
        elementName={elementName}
        props={props}
      />
    </Client>
  );
};
