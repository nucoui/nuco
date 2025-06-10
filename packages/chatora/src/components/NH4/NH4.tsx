import type { CC } from "chatora";

/**
 * Props for the NH4 component
 */
export type Props = Record<string, any>;

/**
 * Events emitted by the NH4 component
 */
export type Emits = never;

/**
 * NH4 heading component - Level 4 heading element
 */
export const NH4: CC<Props, Emits> = ({
  render,
}) => {
  render(() => (
    <h4 class="n-h4">
      <slot />
    </h4>
  ));
};
