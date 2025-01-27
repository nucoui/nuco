import type { ReactElement } from "react";
import { H1, H3 } from "@nuco/react";
import { createFileRoute } from "@tanstack/react-router";
import { LinkButton } from "../components/LinkButton/LinkButton";
import styles from "./index.module.scss";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent(): ReactElement {
  return (
    <div className={styles["contents-container"]}>
      <div className={styles["background-cover"]}>
        {/* <img src="/icon-dark-transparent.svg" /> */}
        <div className={styles["hero-container"]}>
          <div>
            <H1>@nuco/core</H1>
            <H3>Design system for All Frameworks</H3>
          </div>
          <div className={styles.links}>
            <LinkButton href="/docs/getting-started/web-components" variant="primary" width="auto">
              Get Started with Web Components
            </LinkButton>
            <LinkButton href="/docs/getting-started/vue" variant="primary" width="auto">
              Get Started with Vue.js
            </LinkButton>
            <LinkButton href="/docs/getting-started/react" variant="primary" width="auto">
              Get Started with React
            </LinkButton>
          </div>
        </div>
      </div>
      index
    </div>
  );
}
