import type { CC } from "chatora";

/**
 * Props for the NH6 component
 */
export type Props = Record<string, any>;

/**
 * Events emitted by the NH6 component
 */
export type Emits = never;

/**
 * NH6 heading component - Level 6 heading element
 */
export const NH6: CC<Props, Emits> = ({
  render,
}) => {
  render(() => (
    <h6 class="n-h6">
      <slot />
    </h6>
  ));
};
