import type { ComponentProps } from "react";
import { Link } from "@tanstack/react-router";

import styles from "./Anchor.module.scss";

type Props = ComponentProps<typeof Link>;

export const Anchor = (props: Props) => {
  return <Link {...props} className={styles.anchor} />;
};
