import type { Props } from "@/components/NucoWrapper";
import type { NButtonEmits, NButtonProps } from "@nuco/core";
import { convertJsonToJsx, parseHtmlToObject } from "@/utils/parseHtmlToObject";
import { splitAttr } from "@/utils/splitAttr";
import { getNButtonHtml, styleNButton } from "@nuco/core";

declare module "react" {
  // eslint-disable-next-line ts/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "n-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

type ElementType = HTMLButtonElement;

export const ButtonSSR = async (props: Props<ElementType, NButtonProps, NButtonEmits>) => {
  const { props: spitedProps } = splitAttr(props);
  const htmlString = await getNButtonHtml(props);
  const htmlObj = parseHtmlToObject(htmlString);
  const node = convertJsonToJsx(htmlObj, props.children);

  return (
    <n-button {...spitedProps}>
      <style>{styleNButton}</style>
      {node}
      test!!!
    </n-button>
  );
};
