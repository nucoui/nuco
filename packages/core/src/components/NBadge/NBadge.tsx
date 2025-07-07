import type { CC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import { toMatched, toString } from "chatora/util";
import clsx from "clsx";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NBadge.scss?raw";

export type Props = {
  type?: "primary" | "secondary" | "tertiary" | "success" | "warning" | "error";
  text: string;
};

// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const NBadge: CC<Props, Emits> = ({ defineProps }) => {
  const props = defineProps({
    type: (v: string | undefined) => toMatched(v, ["primary", "secondary", "tertiary", "success", "warning", "error"] as const) ?? "primary",
    text: (v: string | undefined) => toString(v) ?? "",
  });

  return () => (
    <Host shadowRoot style={[style, resetStyle]}>
      <span
        class={clsx(
          "n-badge",
          `-${props().type}`,
        )}
      >
        {props().text}
      </span>
    </Host>
  );
};
