import type { ErrorRouteComponent } from "@tanstack/react-router";
import { Button, H1, H3 } from "@nuco/react";
import styles from "./Error.module.scss";

export const Error: ErrorRouteComponent = ({ error }) => {
  const { name, message } = error;

  return (
    <div className={styles["error-container"]}>
      <div>
        <H1>Error !</H1>
        <H3>{name}</H3>
        <p>{message}</p>

        <Button type="anchor" href="/" width="auto">
          Back to Home
        </Button>
      </div>
    </div>
  );
};
