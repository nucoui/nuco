import type { CC } from "chatora";

/**
 * Props for the NH3 component
 */
export type Props = Record<string, any>;

/**
 * Events emitted by the NH3 component
 */
export type Emits = never;

/**
 * NH3 heading component - Level 3 heading element
 */
export const NH3: CC<Props, Emits> = ({
  render,
}) => {
  render(() => (
    <h3 class="n-h3">
      <slot />
    </h3>
  ));
};
