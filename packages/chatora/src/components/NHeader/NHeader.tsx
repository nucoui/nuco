import type { CC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import { toBoolean } from "chatora/util";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NHeader.scss?raw";

export type Props = {
  isLogo?: boolean;
  isNavToggle?: boolean;
  isMiddle?: boolean;
};

// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const NHeader: CC<Props, Emits> = ({
  defineProps,
}) => {
  const props = defineProps({
    isLogo: v => toBoolean(v) ?? true,
    isNavToggle: v => toBoolean(v) ?? true,
    isMiddle: v => toBoolean(v) ?? true,
  });

  return () => (
    <Host style={[resetStyle, style]}>
      <header class="n-header">
        {props().isLogo
          ? (
              <slot name="left">
                {/* <span>@nuco/chatora</span> */}
              </slot>
            )
          : null}
        {props().isMiddle
          ? (
              <div>
                <slot name="center" />
              </div>
            )
          : null}
        {props().isNavToggle
          ? (
              <div>
                <div>
                  <slot name="right" />
                </div>
              </div>
            )
          : null}
      </header>
    </Host>
  );
};
