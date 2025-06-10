import type { CC } from "chatora";

/**
 * Props for the NH2 component
 */
export type Props = Record<string, any>;

/**
 * Events emitted by the NH2 component
 */
export type Emits = never;

/**
 * NH2 heading component - Level 2 heading element
 */
export const NH2: CC<Props, Emits> = ({
  render,
}) => {
  render(() => (
    <h2 class="n-h2">
      <slot />
    </h2>
  ));
};
