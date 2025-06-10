import type { CC } from "chatora";

/**
 * Props for the NH5 component
 */
export type Props = Record<string, any>;

/**
 * Events emitted by the NH5 component
 */
export type Emits = never;

/**
 * NH5 heading component - Level 5 heading element
 */
export const NH5: CC<Props, Emits> = ({
  render,
}) => {
  render(() => (
    <h5 class="n-h5">
      <slot />
    </h5>
  ));
};
