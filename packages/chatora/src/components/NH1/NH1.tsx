import type { CC } from "chatora";

/**
 * Props for the NH1 component
 */
export type Props = Record<string, any>;

/**
 * Events emitted by the NH1 component
 */
export type Emits = never;

/**
 * NH1 heading component - Level 1 heading element
 */
export const NH1: CC<Props, Emits> = ({
  render,
}) => {
  render(() => (
    <h1 class="n-h1">
      <slot />
    </h1>
  ));
};
