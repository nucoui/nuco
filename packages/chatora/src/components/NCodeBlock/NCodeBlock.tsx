import { type CC, onConnected, signal } from "chatora";
import { Host } from "chatora/jsx-runtime";
import { hastToJsx, toString } from "chatora/util";
import { codeToHast, type CodeToHastOptionsCommon } from "shiki";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NCodeBlock.scss?raw";

export type Props = {
  lang?: CodeToHastOptionsCommon["lang"];
  fileName?: string;
  code: string;
};

// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const NCodeBlock: CC<Props, Emits> = ({ defineProps }) => {
  const props = defineProps({
    lang: v => (toString(v) ?? "plaintext") as CodeToHastOptionsCommon["lang"],
    fileName: v => toString(v),
    code: v => toString(v) ?? "",
  });

  const codeNode = signal<JSX.Element | null>(null);

  onConnected(async () => {
    const hasted = await codeToHast(props().code, {
      lang: props().lang as CodeToHastOptionsCommon["lang"],
      themes: {
        light: "vitesse-light",
        dark: "vitesse-dark",
      },
      defaultColor: false,
      transformers: [
        {
          pre(node) {
            node.properties.part = "pre";
            return node;
          },
          span(node) {
            node.properties.part = "pre";
            return node;
          },
        },
      ],
    });

    codeNode.set(hastToJsx(hasted));
  });

  return () => (
    <Host shadowRoot style={[style, resetStyle]}>
      <div class="n-code-block">
        {props().fileName && (
          <div class="header">
            <span class="name">{props().fileName}</span>
            <span class="lang">{props().lang}</span>
          </div>
        )}
        {
          codeNode.value
            ? (
                <div class="block">
                  {codeNode.value}
                </div>
              )
            : (
                <span class="block">
                  <pre class="shiki">
                    <code>
                      {props().code}
                    </code>
                  </pre>
                </span>
              )
        }
      </div>
    </Host>
  );
};
