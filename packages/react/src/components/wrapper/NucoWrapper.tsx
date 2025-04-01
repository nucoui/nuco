import type { Props } from "@/types/Props";
import type { ElementsMap, ElementsName } from "@nuco/core/elements";
import { Client } from "@/components/wrapper/Client";
import { NucoClientWrapper } from "@/components/wrapper/NucoClientWrapper";
import { NucoServerWrapper } from "@/components/wrapper/NucoServerWrapper";

type WrapperProps<Name extends ElementsName, RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string> = {
  elementName: Name;
  elementClass: ElementsMap[Name];
  getNElementHtml: (props: ElementProps) => string;
  style: string;
  props: Props<RefType, ElementProps, ElementEmits>;
};

export const NucoWrapper = <Name extends ElementsName, RefType extends HTMLElement, ElementProps extends Record<string, unknown>, ElementEmits extends string>({
  elementName,
  elementClass,
  getNElementHtml,
  style,
  props,
}: WrapperProps<Name, RefType, ElementProps, ElementEmits>) => {
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
      <NucoClientWrapper<Name, RefType, ElementProps, ElementEmits>
        elementName={elementName}
        elementClass={elementClass}
        props={props}
      />
    </Client>
  );
};
