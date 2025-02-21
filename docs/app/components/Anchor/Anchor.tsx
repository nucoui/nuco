import type { ComponentProps } from "react";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import styles from "./Anchor.module.scss";

type Props = ComponentProps<typeof Link> & {
  color?: "primary" | "secondary";
};

export const Anchor = ({ color = "primary", ...props }: Props) => {
  return (
    <Link
      {...props}
      className={clsx(
        styles.anchor,
        color === "secondary" && styles["-secondary"],
      )}
    />
  );
};
