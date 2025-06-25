import type { CC } from "chatora";
import { toBoolean } from "@chatora/util";
import { Host } from "chatora/jsx-runtime";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NHeader.scss?raw";

export type Props = {
  isLogo?: boolean;
  isNavToggle?: boolean;
  isMiddle?: boolean;
};

export type Emits = never;

export const NHeader: CC<Props, Emits> = ({
  defineProps,
}) => {
  const props = defineProps({
    isLogo: v => toBoolean(v) ?? true,
    isNavToggle: v => toBoolean(v) ?? true,
    isMiddle: v => toBoolean(v) ?? true,
  });

  return () => (
    <Host style={[style, resetStyle]}>
      <header class="n-header">
        {props().isLogo && (
          <slot>
            {/* <span>@nuco/chatora</span> */}
          </slot>
        )}
        {props().isMiddle && (
          <div>
            <slot name="center" />
          </div>
        )}
        {props().isNavToggle && (
          <div>
            <div>
              <slot name="right" />
            </div>
          </div>
        )}
      </header>
    </Host>
  );
};
