import { createCC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import { toBoolean } from "chatora/util";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NHeader.scss?raw";

/**
 * Props for NHeader component
 */
export type Props = {
  /**
   * Show logo slot
   * @default true
   */
  isLogo?: boolean;
  /**
   * Show navigation toggle slot
   * @default true
   */
  isNavToggle?: boolean;
  /**
   * Show center slot
   * @default true
   */
  isMiddle?: boolean;
};

/**
 * NHeader does not emit any events
 */
// eslint-disable-next-line ts/no-empty-object-type
export type Emits = {};

export const {
  component: NHeader,
  genSD: genSDNHeader,
  genDSD: genDSDNHeader,
  define: defineNHeader,
} = createCC<Props, Emits>("n-header", ({ defineProps }) => {
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
                {/* <span>@nuco/core</span> */}
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
});
