import type { CC } from "chatora";
import { Host } from "chatora/jsx-runtime";
import { toBoolean, toString } from "chatora/util";
import resetStyle from "../../styles/reset.css?raw";
import style from "./NOption.scss?raw";

export type Props = {
  value?: string;
  disabled?: boolean;
  selected?: boolean;
};

export type Emits = never;

export const NOption: CC<Props, Emits> = ({
  defineProps,
}) => {
  const props = defineProps({
    value: v => toString(v),
    disabled: v => toBoolean(v) ?? false,
    selected: v => toBoolean(v) ?? false,
  });

  return () => (
    <Host style={[style, resetStyle]}>
      <div
        role="option"
        part="n-option"
        class="n-option"
        aria-disabled={props().disabled}
        aria-selected={props().selected}
        tabindex={0}
      >
        <slot />
        {props().selected && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>
        )}
      </div>
    </Host>
  );
};
