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
  const isCopied = signal(false);

  const handleClick = () => {
    return navigator.clipboard.writeText(props().code).then(() => {
      isCopied.set(true);
      setTimeout(() => {
        isCopied.set(false);
      }, 2000);
    });
  };

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
        <div class="block">
          {
            codeNode.value
              ? (
                  codeNode.value
                )
              : (
                  <pre class="shiki">
                    <code>
                      {props().code}
                    </code>
                  </pre>
                )
          }
          <button
            class="button"
            onClick={handleClick}
          >
            {
              isCopied.value
                ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z" /></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V7q0-.425.288-.712T4 6t.713.288T5 7v13h10q.425 0 .713.288T16 21t-.288.713T15 22zm4-6V4z" /></svg>
            }
          </button>
        </div>
      </div>
    </Host>
  );
};
