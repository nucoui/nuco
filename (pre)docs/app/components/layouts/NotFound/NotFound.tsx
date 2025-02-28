import { H1, H3 } from "@nuco/react";
import { LinkButton } from "../../LinkButton/LinkButton";
import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={styles["notfound-container"]}>
      <div>
        <H1>404</H1>
        <H3>Page Not Found</H3>
        <p>Sorry, the page you are looking for does not exist.</p>

        <LinkButton href="/" variant="primary" width="auto">
          Back to Home
        </LinkButton>
      </div>
    </div>
  );
};
